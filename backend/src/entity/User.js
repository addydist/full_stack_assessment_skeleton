const { Entity, PrimaryGeneratedColumn, Column, OneToMany } = require('typeorm');
const { UserHome } = require('./UserHome');

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id;

  @Column({ unique: true })
  username;

  @Column({ nullable: true })
  email;

  @OneToMany(() => UserHome, userHome => userHome.user)
  userHomes;
}

module.exports = { User };
