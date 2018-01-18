new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      if(this.checkWin()) {
        return;
      }

      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkLose();
    },
    specialAttack: function() {},
    heal: function() {},
    giveUp: function() {},
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkLose: function() {
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        if (confirm('You lost. Play a new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
      }
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if (confirm('You won! Play a new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else {
        return false;
      }
    }
  }
});
