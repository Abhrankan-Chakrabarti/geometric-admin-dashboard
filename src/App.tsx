/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Library, 
  LayoutDashboard, 
  BookMarked, 
  Users, 
  History, 
  Bell, 
  Search, 
  ChevronRight,
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex font-sans text-slate-900 overflow-hidden select-none" id="app-container">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 hidden md:flex" id="sidebar">
        <div className="p-8 pb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Library className="w-6 h-6 text-white" />
          </div>
          <div className="leading-none">
            <h1 className="text-white font-bold text-lg tracking-tight">CAMPUSLIB</h1>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">Admin Console</span>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2" id="main-nav">
          <div className="bg-slate-800 text-white px-4 py-3 rounded flex items-center gap-4 cursor-pointer">
            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            <span className="text-sm font-semibold">Dashboard</span>
            <LayoutDashboard className="w-4 h-4 ml-auto opacity-40" />
          </div>
          <div className="px-4 py-3 rounded flex items-center gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer group">
            <BookMarked className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm">Book Inventory</span>
          </div>
          <div className="px-4 py-3 rounded flex items-center gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer group">
            <Users className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm">Member Records</span>
          </div>
          <div className="px-4 py-3 rounded flex items-center gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer group">
            <History className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm">Issue History</span>
          </div>
        </nav>

        <div className="p-8 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
            <p className="text-[10px] uppercase tracking-widest mb-1 opacity-50 font-bold">Current Session</p>
            <p className="text-xs font-mono text-indigo-400">LIBRARIAN_ROOT_01</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto" id="main-content">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm flex-shrink-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-sm">System /</span>
            <span className="font-semibold text-slate-800">Active Library Module</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64 transition-all"
              />
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter leading-none">Server Time</p>
              <p className="text-sm font-medium tabular-nums text-slate-700">OCT 24, 2023 | 10:42 AM</p>
            </div>
            <div className="relative cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-slate-200 transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
              </div>
              <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-white rounded-full"></span>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-8 space-y-8 overflow-y-auto w-full max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-grid">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stock Availability</p>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Library className="w-4 h-4" /></div>
              </div>
              <p className="text-3xl font-bold text-slate-900">1,248 <span className="text-xs font-normal text-slate-400">vols</span></p>
              <div className="mt-4 flex items-center gap-1 text-emerald-600 text-xs font-bold">
                <TrendingUp className="w-3 h-3" />
                <span>+12% from last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Members</p>
                <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><Users className="w-4 h-4" /></div>
              </div>
              <p className="text-3xl font-bold text-slate-900">842</p>
              <p className="mt-4 text-[10px] text-slate-400 font-medium">Updated 5m ago</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Currently Issued</p>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Clock className="w-4 h-4" /></div>
              </div>
              <p className="text-3xl font-bold text-indigo-600">156</p>
              <div className="mt-4 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[65%]"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-rose-500 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Overdue Alerts</p>
                <div className="p-2 bg-rose-50 text-rose-500 rounded-lg"><AlertCircle className="w-4 h-4" /></div>
              </div>
              <p className="text-3xl font-bold text-rose-500">12</p>
              <p className="mt-4 text-[10px] text-rose-500 font-bold flex items-center gap-1 cursor-pointer hover:underline">
                Requires manual follow-up <ChevronRight className="w-3 h-3" />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Transactions Table */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden" id="transactions-panel">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <History className="w-4 h-4 text-indigo-600" />
                  Recent Transactions
                </h3>
                <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">VIEW ALL HISTORY</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-200">
                    <tr className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                      <th className="px-6 py-4">Issue ID</th>
                      <th className="px-6 py-4">Member</th>
                      <th className="px-6 py-4">Book Title</th>
                      <th className="px-6 py-4">Due Date</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">#S782</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">Anish Kumar</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">M-301</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">Database Management</td>
                      <td className="px-6 py-4 font-mono text-xs">Nov 03, 2023</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold ring-1 ring-emerald-200/50">ON TIME</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">#S779</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">Ritu Sharma</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">M-245</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">Compiler Design</td>
                      <td className="px-6 py-4 font-mono text-xs">Oct 12, 2023</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded text-[10px] font-bold ring-1 ring-rose-200/50">₹24.00 FINE</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">#S785</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">John Doe</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">M-102</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">Linear Algebra</td>
                      <td className="px-6 py-4 font-mono text-xs">Nov 04, 2023</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-[10px] font-bold ring-1 ring-amber-200/50">GRACE PER.</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">#S786</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">Sarah Bell</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase">M-115</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">Organic Chemistry II</td>
                      <td className="px-6 py-4 font-mono text-xs">Nov 04, 2023</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold ring-1 ring-emerald-200/50">ON TIME</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Issue New Book Form */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col space-y-6" id="issue-panel">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-indigo-600" />
                Issue New Book
              </h3>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Member ID (Reference)</label>
                  <input 
                    type="text" 
                    placeholder="Enter Mem_ID (e.g. 101)" 
                    className="w-full p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Book Number (Inventory)</label>
                  <input 
                    type="text" 
                    placeholder="Enter Book_No (e.g. 52)" 
                    className="w-full p-3 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:opacity-50"
                  />
                </div>
                
                <div className="p-4 bg-indigo-50/50 rounded-lg border border-indigo-100 space-y-3">
                  <div className="flex justify-between text-xs text-indigo-700 font-bold">
                    <span>Rule Applied:</span>
                    <span className="flex items-center gap-1"><div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div> System Auto</span>
                  </div>
                  <ul className="text-[11px] text-indigo-600/80 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">• Default Period: 10 Days</li>
                    <li className="flex items-center gap-2">• Grace Period: +10 Days (Free)</li>
                    <li className="flex items-center gap-2">• Post-Grace Fine: ₹2.00 / Day</li>
                  </ul>
                </div>

                <button className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-600/20">
                  COMMIT TRANSACTION
                </button>
                
                <p className="text-[10px] text-center text-slate-400 italic">
                  * Triggers will update Qty_stock and Issue sequence automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

