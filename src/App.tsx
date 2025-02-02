import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Swords, Crown } from 'lucide-react';

interface Team {
  id: number;
  name: string;
  wwcd: number;
  placementPoints: number;
  killPoints: number;
  totalPoints: number;
}

interface GroupData {
  name: string;
  teams: Team[];
}

const initialGroups: GroupData[] = [
  {
    name: 'Group A',
    teams: [
      { id: 1, name: 'Team Alpha', wwcd: 2, placementPoints: 30, killPoints: 40, totalPoints: 70 },
      { id: 2, name: 'Team Apex', wwcd: 1, placementPoints: 25, killPoints: 35, totalPoints: 60 },
      { id: 3, name: 'Team Assault', wwcd: 1, placementPoints: 20, killPoints: 30, totalPoints: 50 },
    ],
  },
  {
    name: 'Group B',
    teams: [
      { id: 1, name: 'Team Bravo', wwcd: 1, placementPoints: 25, killPoints: 35, totalPoints: 60 },
      { id: 2, name: 'Team Beast', wwcd: 1, placementPoints: 22, killPoints: 33, totalPoints: 55 },
      { id: 3, name: 'Team Blade', wwcd: 0, placementPoints: 18, killPoints: 28, totalPoints: 46 },
    ],
  },
  {
    name: 'Group C',
    teams: [
      { id: 1, name: 'Team Charlie', wwcd: 1, placementPoints: 20, killPoints: 30, totalPoints: 50 },
      { id: 2, name: 'Team Chaos', wwcd: 1, placementPoints: 18, killPoints: 28, totalPoints: 46 },
      { id: 3, name: 'Team Cipher', wwcd: 0, placementPoints: 15, killPoints: 25, totalPoints: 40 },
    ],
  },
  {
    name: 'Group D',
    teams: [
      { id: 1, name: 'Team Delta', wwcd: 0, placementPoints: 15, killPoints: 25, totalPoints: 40 },
      { id: 2, name: 'Team Dragon', wwcd: 0, placementPoints: 12, killPoints: 22, totalPoints: 34 },
      { id: 3, name: 'Team Demon', wwcd: 0, placementPoints: 10, killPoints: 20, totalPoints: 30 },
    ],
  },
];

const TableHeader: React.FC = () => (
  <motion.tr
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-r from-orange-600 to-orange-400"
  >
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">#</th>
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">Team</th>
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">WWCD</th>
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">Place Pts</th>
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">Kill Pts</th>
    <th className="p-2 md:px-4 lg:px-6 py-4 text-black font-bold text-sm md:text-base">Total</th>
  </motion.tr>
);

const TeamRow: React.FC<{ team: Team; index: number; delay: number }> = ({ team, index, delay }) => (
  <motion.tr
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: delay * 0.1 }}
    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 165, 0, 0.1)' }}
    className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors"
  >
    <td className="p-2 md:px-4 lg:px-6 py-4 text-sm md:text-base">{index + 1}</td>
    <td className="p-2 md:px-4 lg:px-6 py-4 font-medium text-sm md:text-base">{team.name}</td>
    <td className="p-2 md:px-4 lg:px-6 py-4 text-sm md:text-base">{team.wwcd}</td>
    <td className="p-2 md:px-4 lg:px-6 py-4 text-sm md:text-base">{team.placementPoints}</td>
    <td className="p-2 md:px-4 lg:px-6 py-4 text-sm md:text-base">{team.killPoints}</td>
    <td className="p-2 md:px-4 lg:px-6 py-4 font-bold text-orange-400 text-sm md:text-base">{team.totalPoints}</td>
  </motion.tr>
);

function App() {
  const [groups, setGroups] = useState(initialGroups);

  useEffect(() => {
    const sortedGroups = groups.map(group => ({
      ...group,
      teams: [...group.teams].sort((a, b) => b.totalPoints - a.totalPoints)
    }));
    setGroups(sortedGroups);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[1400px] mx-auto"
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500"
          >
            Technobash - BGMI 2025
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-orange-400"
          >
            Points Table
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              <span>Qualifier Round</span>
            </div>
            <div className="flex items-center gap-2">
              <Swords className="text-red-500" />
              <span>Battle Royale</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="text-yellow-400" />
              <span>₹8,000 Prize Pool</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl w-full"
            >
              <motion.div 
                className="bg-gradient-to-r from-orange-600/20 to-orange-400/20 border-l-4 border-orange-500 px-4 md:px-6 py-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h2 className="text-xl md:text-2xl font-bold text-orange-400">{group.name}</h2>
              </motion.div>
              <div className="w-full">
                <table className="w-full table-fixed">
                  <thead>
                    <TableHeader />
                  </thead>
                  <tbody>
                    {group.teams.map((team, index) => (
                      <TeamRow
                        key={team.id}
                        team={team}
                        index={index}
                        delay={index + (groupIndex * 3)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default App;