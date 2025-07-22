'use client';

import { useState } from 'react';
import { Trophy, Calendar, MapPin, Users, Star, TrendingUp, Award, Target, Brain } from 'lucide-react';

interface CareerStat {
  format: string;
  matches: number;
  runs: number;
  average: number;
  strikeRate: number;
  hundreds: number;
  fifties: number;
}

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export default function RohitSharmaWebsite() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const careerStats: CareerStat[] = [
    {
      format: 'ODI',
      matches: 262,
      runs: 10866,
      average: 48.96,
      strikeRate: 90.99,
      hundreds: 31,
      fifties: 56
    },
    {
      format: 'T20I',
      matches: 159,
      runs: 4231,
      average: 31.32,
      strikeRate: 140.89,
      hundreds: 5,
      fifties: 32
    },
    {
      format: 'Test',
      matches: 67,
      runs: 4301,
      average: 41.75,
      strikeRate: 56.91,
      hundreds: 11,
      fifties: 16
    }
  ];

  const achievements: Achievement[] = [
    {
      year: '2019',
      title: 'World Cup Leading Run Scorer',
      description: 'Scored 648 runs in 2019 Cricket World Cup, highest by any player'
    },
    {
      year: '2019',
      title: 'Most ODI Hundreds in a Calendar Year',
      description: 'Scored 7 ODI hundreds in 2019, a world record'
    },
    {
      year: '2013',
      title: 'IPL Winner as Captain',
      description: 'Led Mumbai Indians to their first IPL title'
    },
    {
      year: '2014',
      title: 'Highest Individual Score in ODI',
      description: 'Scored 264 vs Sri Lanka, highest individual score in ODI cricket'
    },
    {
      year: '2023',
      title: 'World Cup Runner-up as Captain',
      description: 'Led India to World Cup final, finishing as tournament leading run scorer'
    }
  ];

  const milestones = [
    { milestone: 'ODI Debut', date: 'June 23, 2007', opponent: 'Ireland' },
    { milestone: 'Test Debut', date: 'November 6, 2013', opponent: 'West Indies' },
    { milestone: 'T20I Debut', date: 'September 12, 2007', opponent: 'England' },
    { milestone: 'First ODI Century', date: 'June 28, 2010', opponent: 'Zimbabwe' },
    { milestone: 'Appointed ODI Captain', date: 'January 2017', opponent: 'England' },
    { milestone: '10,000 ODI Runs', date: 'October 2023', opponent: 'Australia' }
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question: 'What is Rohit Sharma\'s highest individual score in ODIs?',
      options: ['200', '209', '264', '250'],
      answer: '264',
    },
    {
      question: 'In which year did Rohit score 5 centuries in a single World Cup?',
      options: ['2011', '2015', '2019', '2023'],
      answer: '2019',
    },
    {
      question: 'Which IPL team does Rohit captain?',
      options: ['CSK', 'RCB', 'MI', 'KKR'],
      answer: 'MI',
    },
    {
      question: 'How many ODI double centuries has Rohit Sharma scored?',
      options: ['1', '2', '3', '4'],
      answer: '3',
    },
    {
      question: 'What is Rohit Sharma\'s nickname?',
      options: ['Captain Cool', 'The Hitman', 'The Wall', 'Captain Courageous'],
      answer: 'The Hitman',
    }
  ];

  const handleAnswer = (option: string) => {
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < quizQuestions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-orange-400 to-red-600 p-2 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <img 
                  src="/images/rohit.gif" 
                  alt="Rohit Sharma in action" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Rohit Sharma
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The Hitman • Captain • Legend
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                <span>Born: April 30, 1987</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Right-handed Opener</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Star },
              { id: 'stats', label: 'Career Stats', icon: TrendingUp },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'milestones', label: 'Milestones', icon: Target },
              { id: 'quiz', label: 'Quiz', icon: Brain }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'quiz') {
                    resetQuiz();
                  }
                }}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-400 text-orange-400'
                    : 'border-transparent text-blue-100 hover:text-white hover:border-white/30'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">The Hitman</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Rohit Sharma, fondly known as "The Hitman," is one of cricket's most elegant and destructive batsmen. 
                  Known for his timing, placement, and ability to score big hundreds, Rohit has redefined modern batting 
                  across all formats of the game.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  As India's ODI and T20I captain, Rohit has led from the front, combining aggressive batting with 
                  astute leadership. His record-breaking performances and consistent excellence make him one of the 
                  greatest limited-overs batsmen of all time.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">Quick Facts</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">Full Name</span>
                    <span className="font-semibold">Rohit Gurunath Sharma</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">Nickname</span>
                    <span className="font-semibold">The Hitman</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">Role</span>
                    <span className="font-semibold">Opening Batsman</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">Batting Style</span>
                    <span className="font-semibold">Right-handed</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-blue-100">IPL Team</span>
                    <span className="font-semibold">Mumbai Indians</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Career Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
                  <div className="text-blue-100">ODI Double Centuries</div>
                  <div className="text-sm text-blue-300 mt-1">Only player with 3 ODI 200s</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">5</div>
                  <div className="text-blue-100">IPL Titles</div>
                  <div className="text-sm text-blue-300 mt-1">As Mumbai Indians captain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">47</div>
                  <div className="text-blue-100">International Centuries</div>
                  <div className="text-sm text-blue-300 mt-1">Across all formats</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">Career Statistics</h2>
            <div className="grid gap-6">
              {careerStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-orange-400">{stat.format}</h3>
                    <div className="text-sm text-blue-300">{stat.matches} Matches</div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.runs.toLocaleString()}</div>
                      <div className="text-sm text-blue-300">Runs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.average}</div>
                      <div className="text-sm text-blue-300">Average</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.strikeRate}</div>
                      <div className="text-sm text-blue-300">Strike Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.hundreds}</div>
                      <div className="text-sm text-blue-300">Hundreds</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.fifties}</div>
                      <div className="text-sm text-blue-300">Fifties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.matches}</div>
                      <div className="text-sm text-blue-300">Matches</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">Major Achievements</h2>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                        <span className="bg-orange-400/20 text-orange-400 px-2 py-1 rounded text-sm">{achievement.year}</span>
                      </div>
                      <p className="text-blue-100">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'milestones' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">Career Milestones</h2>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{milestone.milestone}</h3>
                        <p className="text-blue-300">vs {milestone.opponent}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-orange-400 font-semibold">{milestone.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              {showScore ? (
                <>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-orange-400">Quiz Complete!</h2>
                  <div className="mb-8">
                    <div className="text-6xl font-bold text-white mb-2">{score}</div>
                    <div className="text-xl text-blue-200">out of {quizQuestions.length}</div>
                  </div>
                  <div className="mb-8">
                    {score === quizQuestions.length ? (
                      <p className="text-green-400 text-lg">🎉 Perfect Score! You're a true Rohit Sharma fan!</p>
                    ) : score >= quizQuestions.length * 0.7 ? (
                      <p className="text-yellow-400 text-lg">👏 Great job! You know your Hitman facts!</p>
                    ) : (
                      <p className="text-blue-300 text-lg">📚 Keep learning about the Hitman!</p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition font-semibold"
                    >
                      Take Quiz Again
                    </button>
                    <button
                      onClick={() => setActiveTab('overview')}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition font-semibold"
                    >
                      Back to Website
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-300">Question</div>
                      <div className="text-lg font-semibold text-orange-400">
                        {currentQuestion + 1} of {quizQuestions.length}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4 bg-gray-700/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <h2 className="text-2xl font-semibold mb-8 text-white leading-relaxed">
                    {quizQuestions[currentQuestion].question}
                  </h2>
                  
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className="block w-full bg-white/10 hover:bg-orange-500 hover:scale-105 px-6 py-4 rounded-xl text-white font-medium transition-all duration-200 border border-white/20 hover:border-orange-400"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100">
           <marquee> © 2025 Rohit Sharma Fan Website. Made by Ayaan Mohan. (Rohit's biggest fan )</marquee>
          </p>
        </div>
      </footer>
    </div>
  );
}