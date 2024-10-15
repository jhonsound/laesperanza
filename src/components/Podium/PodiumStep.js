import { getLogoClan } from 'components/Forms/Form';
import './podium.css';

export default function PodiumStep({ winners, type }) {
  return (
    <div className="page-leaderboard">
      <div className="ranking">
        <div className="contain">
          <div className="ranking-table">
            <div className="ranking-table-header-row">
              <div className="ranking-table-header-data h6">Winners</div>
            </div>
            {winners.map((winner, index) => (
              <div key={winner.name} className={`shadow-md ranking-table-row-leader-${index + 1}`}>
                <div className={`ranking-table-data-leader-${index + 1}`}>
                  {index === 0 && <div className="medal-gold"></div>}
                  {index === 1 && <div className="medal-silver"></div>}
                  {index === 2 && <div className="medal-bronze"></div>}
                </div>
                <div className="ranking-table-data">{winner.name}</div>
                <img src={type === 'clan' ? getLogoClan(winner.name) : getLogoClan(winner?.clan?.name)} width={80} height={80} className='pr-4' alt=''/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
