import './insights.scss';
import Chart from '../../components/chart/Chart';
import data from '../../dummyData';

const Insights = () => {
    return (
	<div className='insights'>
	    <Chart title='Users and Uploaded Videos'
		   data={ data }
		   grid
		   dataKey='month'
		   lineKey1='users'
		   lineKey2='videos'
	    />
	</div>
    );
}

export default Insights;
