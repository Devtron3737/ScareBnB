var CloudinaryUtil = {
  picUpload: function (callback) {
    console.log(window.CLOUDINARY_CLOUD_NAME)
    cloudinary.openUploadWidget(
      {
        cloud_name: window.CLOUDINARY_CLOUD_NAME,
        upload_preset: window.CLOUDINARY_UPLOAD_PRESET,
        theme: 'white'
      },
      callback
    )
  }
}
