// const cloudinary = require("../middleware/cloudinary");
const Track = require("../models/Track");

module.exports = {
  // getProfile: async (req, res) => { 
  //   console.log(req.user)
  //   try {
  //     //Since we have a session each request (req) contains the logged-in users info: req.user
  //     //console.log(req.user) to see everything
  //     //Grabbing just the posts of the logged-in user
  //     const posts = await Track.find({ user: req.user.id });
  //     //Sending post data from mongodb and user data to ejs template
  //     res.render("profile.ejs", { posts: posts, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // getPost: async (req, res) => {
  //   try {
  //     //id parameter comes from the post routes
  //     //router.get("/:id", ensureAuth, postsController.getPost);
  //     //http://localhost:2121/post/631a7f59a3e56acfc7da286f
  //     //id === 631a7f59a3e56acfc7da286f
  //     const post = await Track.findById(req.params.id);
  //     res.render("post.ejs", { post: post, user: req.user});
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  postComplete: async (req, res) => {
    console.log('postComplete controller')
    try {
      await Track.create(
        {
          streak: 1,
          user:req.user.id
        }
      );
      console.log("Streak +1");
      // res.redirect(`/track/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    console.log('markComplete controller')
    try {
      await Track.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Streak +1");
      // res.redirect(`/track/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Track.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Track.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
