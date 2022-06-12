import Buttons from '../components/Buttons/Component';
import Navigation from '../components/Navigation/Component';
import style from '/styles/Home.module.css';

import {
  Cirkel1,
  Cirkel2,
  Cirkel3,
  Cirkel4,
  Cirkel5,
  Cirkel6,
  Cirkel7,
  Cirkel8,
} from '../public/assets/bolletjes/cirkel';

export default function Home() {
  return (
    <div>
      {/* <Navigation /> */}
      {/* <Buttons /> */}
      <div className={style.background}>
        <Cirkel1 className={style.cirkel1} />
        <Cirkel2 className={style.cirkel2} />
        <Cirkel3 className={style.cirkel3} />
        <Cirkel4 className={style.cirkel4} />
        <Cirkel5 className={style.cirkel5} />
        <Cirkel6 className={style.cirkel6} />
        <Cirkel7 className={style.cirkel7} />
        <Cirkel8 className={style.cirkel8} />
      </div>
    </div>
  );
}
