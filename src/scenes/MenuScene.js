class MenuScene extends BaseScene {
  constructor(config) {
    super('MenuScene', config);

    this.menu = [
      { scene: 'PlayScene', text: 'Play' },
      { scene: 'ScoreScene', text: 'Score' },
      { scene: null, text: 'Exit' },
    ];
  }

  create() {
    super.create();
    this.createMenu(this.menu, this.setUpMenuEvents.bind(this));
  }

  setUpMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.setInteractive({ cursor: 'pointer' });
    textGO.on('pointerover', () => {
      textGO.style.cursor = 'pointer';
      textGO.setStyle({ fill: '#ff0' });
    });

    textGO.on('pointerout', () => {
      textGO.setStyle({ fill: '#fff' });
    });

    textGO.on('pointerup', () => {
      menuItem.scene && this.scene.start(menuItem.scene);

      if (menuItem.text === 'Exit') this.game.destroy(true);
    });
  }
}
