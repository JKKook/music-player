import Song from '../models/Song';
import User from '../models/User';
module.exports = function (app, Song) {
    app.get('/api/charts', (req, res) => {
        Song.find((err, charts) => {
            if (err) return res.status(500).send({ error: 'database failure' });
            res.json(charts);
        });
    });
};

// [CONFIGURE ROUTER]
export const home = async (req, res) => {
    // Create Document
    const chart = await Song.find({}).sort({ listeners: -1 });
    app.get('/api/charts', (req, res) => {
        res.send('charts');
    });
    return res.render('home', { pageTitle: 'Home', chart });
};

export const createDoc = async () => {
    app.post('/api/charts', (req, res) => {
        data.name = req.name;
        data.artist = req.artist;
        data.listeners = req.listeners;

        data.save((err, val) => {
            if (err) {
                console.log(err);
            } else {
                console.log('save');
            }
        });
    });
};

const BASIC_URL = 'https://ws.audioscrobbler.com/2.0/';

const data = new Song([
    {
        name: 'Believer',
        artist: 'Imagine Dragons',
        url: 'https://www.last.fm/music/Imagine+Dragons/_/Believer',
        listeners: '725472',
    },

    {
        name: 'Believe What I Say',
        artist: 'Kanye West',
        url: 'https://www.last.fm/music/Kanye+West/_/Believe+What+I+Say',
        listeners: '406731',
    },

    {
        name: 'Believe',
        artist: 'Cher',
        url: 'https://www.last.fm/music/Cher/_/Believe',
        listeners: '698283',
    },

    {
        name: 'Make Believe',
        artist: 'Juice WRLD',
        url: 'https://www.last.fm/music/Juice+WRLD/_/Make+Believe',
        listeners: '157901',
    },

    {
        name: 'I Believe in a Thing Called Love',
        artist: 'The Darkness',
        url: 'https://www.last.fm/music/The+Darkness/_/I+Believe+in+a+Thing+Called+Love',
        listeners: '669345',
    },

    {
        name: 'Believe Me Natalie',
        artist: 'The Killers',
        url: 'https://www.last.fm/music/The+Killers/_/Believe+Me+Natalie',
        listeners: '659583',
    },

    {
        name: 'Believe',
        artist: 'Mumford & Sons',
        url: 'https://www.last.fm/music/Mumford+&+Sons/_/Believe',
        listeners: '306684',
    },

    {
        name: 'Believe It',
        artist: 'PARTYNEXTDOOR',
        url: 'https://www.last.fm/music/PARTYNEXTDOOR/_/Believe+It',
        listeners: '238750',
    },

    {
        name: 'Believe',
        artist: 'The Bravery',
        url: 'https://www.last.fm/music/The+Bravery/_/Believe',
        listeners: '378653',
    },

    {
        name: 'Daydream Believer',
        artist: 'The Monkees',
        url: 'https://www.last.fm/music/The+Monkees/_/Daydream+Believer',
        listeners: '390825',
    },

    {
        name: "Okay I Believe You, But My Tommy Gun Don't",
        artist: 'Brand New',
        url: 'https://www.last.fm/music/Brand+New/_/Okay+I+Believe+You,+But+My+Tommy+Gun+Don%27t',
        listeners: '313668',
    },

    {
        name: 'Something to Believe',
        artist: 'Weyes Blood',
        url: 'https://www.last.fm/music/Weyes+Blood/_/Something+to+Believe',
        listeners: '165541',
    },

    {
        name: 'I Believe',
        artist: 'Caroline Polachek',
        url: 'https://www.last.fm/music/Caroline+Polachek/_/I+Believe',
        listeners: '99386',
    },

    {
        name: "We Don't Believe What's on TV",
        artist: 'Twenty One Pilots',
        url: 'https://www.last.fm/music/Twenty+One+Pilots/_/We+Don%27t+Believe+What%27s+on+TV',
        listeners: '246247',
    },

    {
        name: 'BELIEVER',
        artist: 'TWICE',
        url: 'https://www.last.fm/music/TWICE/_/BELIEVER',
        listeners: '78616',
    },

    {
        name: 'If I Believe You',
        artist: 'The 1975',
        url: 'https://www.last.fm/music/The+1975/_/If+I+Believe+You',
        listeners: '153177',
    },

    {
        name: 'I Believe',
        artist: 'Simian Mobile Disco',
        url: 'https://www.last.fm/music/Simian+Mobile+Disco/_/I+Believe',
        listeners: '320088',
    },

    {
        name: 'What a Fool Believes',
        artist: 'The Doobie Brothers',
        url: 'https://www.last.fm/music/The+Doobie+Brothers/_/What+a+Fool+Believes',
        listeners: '361531',
    },

    {
        name: 'Make Believe',
        artist: 'Kero Kero Bonito',
        url: 'https://www.last.fm/music/Kero+Kero+Bonito/_/Make+Believe',
        listeners: '93976',
    },

    {
        name: 'Believe',
        artist: 'Yellowcard',
        url: 'https://www.last.fm/music/Yellowcard/_/Believe',
        listeners: '205090',
    },

    {
        name: "I'll Believe in Anything",
        artist: 'Wolf Parade',
        url: 'https://www.last.fm/music/Wolf+Parade/_/I%27ll+Believe+in+Anything',
        listeners: '299085',
    },

    {
        name: 'Can I believe you',
        artist: 'Fleet Foxes',
        url: 'https://www.last.fm/music/Fleet+Foxes/_/Can+I+believe+you',
        listeners: '162136',
    },

    {
        name: 'Believe',
        artist: 'Disturbed',
        url: 'https://www.last.fm/music/Disturbed/_/Believe',
        listeners: '219230',
    },

    {
        name: 'Believe the Hype',
        artist: 'LUCKI',
        url: 'https://www.last.fm/music/LUCKI/_/Believe+the+Hype',
        listeners: '42392',
    },

    {
        name: 'We Believe',
        artist: 'Red Hot Chili Peppers',
        url: 'https://www.last.fm/music/Red+Hot+Chili+Peppers/_/We+Believe',
        listeners: '332817',
    },

    {
        name: 'Do You Believe in God?',
        artist: '$uicideboy$',
        url: 'https://www.last.fm/music/$uicideboy$/_/Do+You+Believe+in+God%3F',
        listeners: '85015',
    },

    {
        name: 'Believe',
        artist: 'The Chemical Brothers',
        url: 'https://www.last.fm/music/The+Chemical+Brothers/_/Believe',
        listeners: '226245',
    },

    {
        name: 'Believe Me',
        artist: 'Navos',
        url: 'https://www.last.fm/music/Navos/_/Believe+Me',
        listeners: '89339',
    },

    {
        name: 'I Believe I Can Fly',
        artist: 'R. Kelly',
        url: 'https://www.last.fm/music/R.+Kelly/_/I+Believe+I+Can+Fly',
        listeners: '323708',
    },
]);
