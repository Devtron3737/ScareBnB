var AWSUtil = {
  picUpload: function (image, callback) {

    AWS.config.credentials = {
      accessKeyId: window.AWS_ACCESS,
      secretAccessKey: window.AWS_SECRET
    }

    AWS.config.region = 'us-west-1'

    if (image) {
      var bucket = new AWS.S3({params: {Bucket: window.AWS_BUCKET_DEV}}),
          params = {Key: image.name, ContentType: image.type, Body: image};

      bucket.upload(params, function (error, result) {
        callback(error, result.Location)
      });
    } else {
      sweetAlert({
        title: "Whoops",
        text: "You didnt provide a listing image!",
        type: "error",
        allowOutsideClick: true,
        confirmButtonColor: "#ff4d4d",
        confirmButtonText: "Ok"
      })
    }
  }
}
