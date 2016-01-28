var AWSUtil = {
  picUpload: function (image) {
    console.log('in awsutil')
    AWS.config.credentials = {
      accessKeyId: window.AWS_ACCESS,
      secretAccessKey: window.AWS_SECRET
    }

    AWS.config.region = 'us-west-1'

    if (image) {
      var bucket = new AWS.S3({params: {Bucket: window.AWS_BUCKET_DEV}}),
          params = {Key: image.name, ContentType: image.type, Body: image};

      bucket.upload(params, function (error, data) {
        console.log('error', error)
        console.log('data', data)
      });
    } else {
      console.log('Nothing to upload.')
    }
  }
}
