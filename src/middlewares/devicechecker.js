const checkdevice = async(req, res, next) => {
    const userAgent = req.headers['user-agent'];
    
    
    let deviceType;
    if (userAgent.match(/Android/i)) {
        deviceType = 'Android';
    } else if (userAgent.match(/iPhone|iPad|iPod/i)){
        deviceType = 'iOS';
    } else if (userAgent.match(/Windows Phone/i)){
        deviceType = 'Windows Phone';
    } else if (userAgent.match(/Windows/i)){
        deviceType = 'Windows PC';
    } else if (userAgent.match(/Macintosh/i)){
        deviceType = 'Macintosh';
    } else if (userAgent.match(/Linux/i)){
        deviceType = 'Linux PC';
    } else {
        deviceType = 'Unknown';
    }
    
    console.log(('User Device Type:', deviceType))
    next();
    };
    
    module.exports = {checkdevice}