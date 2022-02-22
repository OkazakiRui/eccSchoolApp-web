import { VFC } from 'react';
import Layout from 'components/template/Layout';
import {
  faTable,
  faChartLine,
  faBell,
  faCalendarAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import HomeItem from 'components/organisms/HomeItem';

const Home: VFC = () => {
  return (
    <Layout pageTitle='Home'>
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3'>
        <HomeItem title='時間割' path='/calendar' icon={faTable}>
          今週の時間割を確認することが出来ます。
        </HomeItem>
        <HomeItem title='出席率' path='/calendar' icon={faChartLine}>
          各授業の出席率を確認することが出来ます。
        </HomeItem>
        <HomeItem title='学校からのお知らせ' path='/calendar' icon={faBell}>
          学校からのお知らせを確認することが出来ます。
        </HomeItem>
        <HomeItem title='カレンダー' path='/calendar' icon={faCalendarAlt}>
          今後の予定を確認することが出来ます。
        </HomeItem>
        <HomeItem title='設定' path='/calendar' icon={faCog}>
          現在の設定を確認することが出来ます。
        </HomeItem>
      </div>
    </Layout>
  );
};

export default Home;