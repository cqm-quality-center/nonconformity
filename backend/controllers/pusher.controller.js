const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '934789',
    key: 'be3ffb2f6ec0730a6670',
    secret: '50bc048e4de6eda80db8',
    cluster: 'eu',
    encrypted: true
  });

module.exports.auth = (req, res) => {
    console.log('POST to /pusher/auth');
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    es.send(auth);
}