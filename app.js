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
      let playerWin = this.playerAttacks(3, 10);
      if(playerWin) {
        return;
      }

      this.monsterAttacks();
    },
    specialAttack: function() {
      let playerWin = this.playerAttacks(10, 20);
      if (playerWin) {
        return;
      }

      this.monsterAttacks();
    },
    heal: function() {
      if (this.playerHealth < 100) {
        this.playerHealth += 10;
      }

      this.monsterAttacks();
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
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
    },
    monsterAttacks: function() {
      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkLose();
    },
    playerAttacks: function(min, max) {
      var damage = this.calculateDamage(min, max);
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return true;
      } else {
        return false;
      }
    }
  }
});
