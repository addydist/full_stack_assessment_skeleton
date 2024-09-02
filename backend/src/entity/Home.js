const { Entity, PrimaryGeneratedColumn, Column, OneToMany } = require('typeorm');
const { UserHome } = require('./UserHome');

@Entity()
class Home {
  @PrimaryGeneratedColumn()
  id;

  @Column({ unique: true })
  streetAddress;

  @Column({ nullable: true })
  state;

  @Column({ nullable: true })
  zip;

  @Column()
  sqft;

  @Column()
  beds;

  @Column()
  baths;

  @Column()
  listPrice;

  @OneToMany(() => UserHome, userHome => userHome.home)
  userHomes;
}

module.exports = { Home };
