var CloudinaryUtil = {
  picUpload: function (callback) {
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
