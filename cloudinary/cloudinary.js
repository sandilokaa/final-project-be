const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dbplhgttm',
    api_key: '276167717468883',
    api_secret: '_vsPPX2Y60WMWnKXv7yHlOih46c',
    secure: true
});

module.exports = cloudinary;