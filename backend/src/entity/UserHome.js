const { Entity, ManyToOne, PrimaryGeneratedColumn } = require('typeorm');
const { User } = require('./User');
const { Home } = require('./Home');

@Entity()
class UserHome {
  @PrimaryGeneratedColumn()
  id;

  @ManyToOne(() => User, user => user.userHomes)
  user;

  @ManyToOne(() => Home, home => home.userHomes)
  home;
}

module.exports = { UserHome };
