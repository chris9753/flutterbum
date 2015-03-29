Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'liveStart',
      meta: {
        'description': 'Projects and startups made fun!'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});
