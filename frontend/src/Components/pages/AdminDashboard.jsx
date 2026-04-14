import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Building2, Save, LayoutDashboard, Building, Info, HelpCircle, LogOut, Plus, Trash2, MapPin, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hero');

  const [form, setForm] = useState({
    heroText: "",
    overview: "",
    about: "",
    amenitiesArray: [],
    faqArray: [],
    connectivityArray: [],
    constructionStatus: "Oct 2026",
    constructionTimelineArray: []
  });

  useEffect(() => {
    // Fetch initial data from Backend
    const apiBase = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");
    axios.get(`${apiBase}/content`)
      .then(res => {
        if (res.data) {
           const d = res.data;
           let parsedAmenities = [];
           let parsedFaq = [];
           let parsedConnectivity = [];
           let parsedConstruction = { status: "Oct 2026", timeline: [] };
           
           // AMEINITIES
           try {
               parsedAmenities = JSON.parse(d.amenities || "[]");
               if (!Array.isArray(parsedAmenities)) throw new Error();
           } catch {
               parsedAmenities = (d.amenities || "").split(",").map(t => ({ title: t.trim(), icon: 'fitness_center', description: '' })).filter(a => a.title);
           }

           // FAQ
           try {
               parsedFaq = JSON.parse(d.faq || "[]");
               if (!Array.isArray(parsedFaq)) throw new Error();
           } catch {
               parsedFaq = d.faq ? [{q: "Heading Info", a: d.faq }] : [];
           }

           // CONNECTIVITY
           try {
               parsedConnectivity = JSON.parse(d.connectivity || "[]");
               if (!Array.isArray(parsedConnectivity) || parsedConnectivity.length === 0) throw new Error();
           } catch {
               parsedConnectivity = [
                   { name: "Vikhroli Station", distance: "5 Mins", icon: "train" },
                   { name: "Eastern Express Highway", distance: "2 Mins", icon: "directions_car" },
                   { name: "Godrej Memorial Hospital", distance: "8 Mins", icon: "medical_services" },
                   { name: "R-City Mall", distance: "15 Mins", icon: "shopping_bag" }
               ];
           }

           // CONSTRUCTION
           try {
               const parsed = JSON.parse(d.construction || "{}");
               parsedConstruction = {
                   status: parsed.status || "Oct 2026",
                   timeline: (Array.isArray(parsed.timeline) && parsed.timeline.length > 0) ? parsed.timeline : [
                       { title: "Structure Completion", desc: "Level 15 Slab Casting completed. External painting in progress.", completed: true },
                       { title: "Internal Finishing", desc: "Tiling and electrical wiring commenced for Wing A.", completed: false }
                   ]
               };
           } catch {
               parsedConstruction = { 
                   status: "Oct 2026", 
                   timeline: [
                       { title: "Structure Completion", desc: "Level 15 Slab Casting completed. External painting in progress.", completed: true },
                       { title: "Internal Finishing", desc: "Tiling and electrical wiring commenced for Wing A.", completed: false }
                   ] 
               };
           }

           setForm({
               ...d,
               amenitiesArray: parsedAmenities,
               faqArray: parsedFaq,
               connectivityArray: parsedConnectivity,
               constructionStatus: parsedConstruction.status,
               constructionTimelineArray: parsedConstruction.timeline
           });
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleArrayChange = (arrayName, index, field, value) => {
      const newArray = [...form[arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      setForm({ ...form, [arrayName]: newArray });
  };

  const addArrayItem = (arrayName, template) => {
      setForm({ ...form, [arrayName]: [...(form[arrayName] || []), template] });
  };
  
  const removeArrayItem = (arrayName, index) => {
      const newArray = [...form[arrayName]];
      newArray.splice(index, 1);
      setForm({ ...form, [arrayName]: newArray });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
        const payload = {
            ...form,
            amenities: JSON.stringify(form.amenitiesArray),
            faq: JSON.stringify(form.faqArray),
            connectivity: JSON.stringify(form.connectivityArray),
            construction: JSON.stringify({
                status: form.constructionStatus,
                timeline: form.constructionTimelineArray
            })
        };
        // Cleanup UI-only tracking fields before sending
        const keysToRemove = ['amenitiesArray', 'faqArray', 'connectivityArray', 'constructionStatus', 'constructionTimelineArray'];
        keysToRemove.forEach(k => delete payload[k]);

        const apiBase = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");
        await axios.post(`${apiBase}/content`, payload);
        alert('Site content updated successfully!');
    } catch (err) {
        alert('Error communicating with backend server.');
        console.error(err);
    }
  };

  const handleLogout = () => {
      localStorage.removeItem('isAdminAuthenticated');
      navigate('/admin');
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section' , icon: LayoutDashboard },
    { id: 'overview', label: 'Overview', icon: Building },
    { id: 'connectivity', label: 'Connectivity', icon: MapPin },
    { id: 'amenities', label: 'Amenities', icon: LayoutDashboard },
    { id: 'construction', label: 'Construction', icon: Calendar },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 text-[#006c4d]">
                <Building2 size={24} className="stroke-[2.5]" />
                <span className="font-headline italic text-lg font-bold tracking-tight">Admin Console</span>
            </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === tab.id ? 'bg-[#3eb489]/10 text-[#006c4d] shadow-sm ring-1 ring-[#3eb489]/20' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                    >
                        <Icon size={18} />
                        {tab.label}
                    </button>
                )
            })}
        </nav>
        <div className="p-4 border-t border-gray-100 mt-auto">
            <div className="px-4 py-2 mb-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Project Developer</p>
                <p className="text-sm font-headline italic text-[#006c4d] font-bold">DraXx</p>
            </div>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-red-50 rounded-xl text-sm font-bold transition-all">
                <LogOut size={18} /> Logout
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
         <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center z-10">
            <h1 className="text-xl font-headline italic font-bold text-gray-900">
                Manage {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <div className="flex gap-3">
               <button onClick={() => window.open('/', '_blank')} className="px-4 py-2 text-sm font-bold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">View Site</button>
               <button onClick={handleSave} className="bg-[#006c4d] hover:bg-[#005a40] text-white px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#006c4d]/20">
                    <Save size={16} /> Save Changes
               </button>
            </div>
         </header>

         <main className="flex-1 overflow-y-auto p-8 bg-[#fdfdfd]">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                
                {/* Hero */}
                {activeTab === 'hero' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                            <label className="block text-[11px] font-black text-[#006c4d] mb-2 uppercase tracking-[0.2em]">Landing Headline</label>
                            <textarea 
                                rows={4}
                                value={form.heroText || ""}
                                onChange={(e) => handleInputChange('heroText', e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3eb489] focus:bg-white outline-none font-headline text-xl" 
                                placeholder="THINKING OF A FANTASTIC VICINITY?"
                            />
                        </div>
                    </div>
                )}

                {/* Overview */}
                {activeTab === 'overview' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                            <label className="block text-[11px] font-black text-[#006c4d] mb-2 uppercase tracking-[0.2em]">Project Narrative</label>
                            <textarea 
                                rows={10}
                                value={form.overview || ""}
                                onChange={(e) => handleInputChange('overview', e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3eb489] focus:bg-white outline-none text-sm leading-relaxed" 
                                placeholder="Vighnaharta Infinity is more than just a residence..."
                            />
                        </div>
                    </div>
                )}

                {/* Connectivity */}
                {activeTab === 'connectivity' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center">
                             <h3 className="font-headline italic text-xl font-bold text-gray-800">Nearby Establishments</h3>
                             <button 
                                onClick={() => addArrayItem('connectivityArray', { name: "Station Name", distance: "0 Mins", icon: "train" })}
                                className="text-xs font-bold text-white bg-[#006c4d] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3eb489] transition-all"
                            >
                                <Plus size={14} /> Add Location
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {form.connectivityArray?.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 border border-gray-100 bg-gray-50 rounded-xl items-end relative group">
                                     <button onClick={() => removeArrayItem('connectivityArray', index)} className="absolute top-2 right-2 p-1 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></button>
                                     <div className="flex-1 grid grid-cols-3 gap-4">
                                          <div>
                                              <label className="block text-[10px] font-bold text-gray-400 mb-1">Place Name</label>
                                              <input value={item.name} onChange={(e) => handleArrayChange('connectivityArray', index, 'name', e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outfit outline-none focus:border-primary" />
                                          </div>
                                          <div>
                                              <label className="block text-[10px] font-bold text-gray-400 mb-1">Distance/Time</label>
                                              <input value={item.distance} onChange={(e) => handleArrayChange('connectivityArray', index, 'distance', e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outfit outline-none focus:border-primary" />
                                          </div>
                                          <div>
                                              <label className="block text-[10px] font-bold text-gray-400 mb-1">Icon (Material Name)</label>
                                              <input value={item.icon} onChange={(e) => handleArrayChange('connectivityArray', index, 'icon', e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outfit outline-none focus:border-primary" placeholder="train, hospital, etc." />
                                          </div>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Construction */}
                {activeTab === 'construction' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                        <div className="p-5 bg-[#006c4d]/5 border border-[#006c4d]/10 rounded-2xl">
                             <label className="block text-[11px] font-black text-[#006c4d] mb-2 uppercase tracking-[0.2em]">Overall Status Label</label>
                             <input 
                                value={form.constructionStatus} 
                                onChange={(e) => handleInputChange('constructionStatus', e.target.value)} 
                                className="w-full max-w-xs px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-primary outline-none focus:border-primary" 
                                placeholder="e.g. Oct 2026"
                             />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                 <h3 className="font-headline italic text-xl font-bold text-gray-800">Timeline Milestones</h3>
                                 <button onClick={() => addArrayItem('constructionTimelineArray', { title: "Milestone", desc: "Short update description", completed: false })} className="text-xs font-bold text-white bg-[#006c4d] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3eb489] transition-all">
                                    <Plus size={14} /> Add Milestone
                                </button>
                            </div>
                            {form.constructionTimelineArray?.map((item, index) => (
                                <div key={index} className="p-5 border border-gray-100 bg-gray-50 rounded-2xl relative group">
                                     <button onClick={() => removeArrayItem('constructionTimelineArray', index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></button>
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                          <div>
                                              <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Headline</label>
                                              <input value={item.title} onChange={(e) => handleArrayChange('constructionTimelineArray', index, 'title', e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold" />
                                          </div>
                                          <div className="flex items-end pb-2">
                                              <label className="flex items-center gap-2 cursor-pointer">
                                                  <input type="checkbox" checked={item.completed} onChange={(e) => handleArrayChange('constructionTimelineArray', index, 'completed', e.target.checked)} className="w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary" />
                                                  <span className="text-xs font-bold text-gray-600">Mark as Completed</span>
                                              </label>
                                          </div>
                                     </div>
                                     <div>
                                          <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Detail Description</label>
                                          <textarea rows={2} value={item.desc} onChange={(e) => handleArrayChange('constructionTimelineArray', index, 'desc', e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs" />
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Amenities */}
                {activeTab === 'amenities' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center">
                            <h3 className="font-headline italic text-xl font-bold text-gray-800">Interactive Cards</h3>
                            <button onClick={() => addArrayItem('amenitiesArray', { title: "Pool", icon: "pool", description: "Ozone filtered luxury pool." })} className="text-xs font-bold text-white bg-[#006c4d] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3eb489]">
                                <Plus size={14} /> Add Amenity
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {form.amenitiesArray?.map((item, index) => (
                                <div key={index} className="p-5 border border-gray-100 bg-gray-50 rounded-2xl group relative transition-all hover:bg-white hover:shadow-md">
                                    <button onClick={() => removeArrayItem('amenitiesArray', index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></button>
                                    <div className="mb-4">
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Amenity Name</label>
                                        <input value={item.title} onChange={(e) => handleArrayChange('amenitiesArray', index, 'title', e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl font-headline font-bold text-[#006c4d]" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Icon (Material Symbol)</label>
                                        <input value={item.icon} onChange={(e) => handleArrayChange('amenitiesArray', index, 'icon', e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-mono" placeholder="e.g. pool, fitness_center" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Brief Description</label>
                                        <textarea rows={2} value={item.description} onChange={(e) => handleArrayChange('amenitiesArray', index, 'description', e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs leading-relaxed" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FAQ */}
                {activeTab === 'faq' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-headline italic text-xl font-bold text-gray-800">Q&A Knowledge Base</h3>
                            <button onClick={() => addArrayItem('faqArray', { q: "New Question?", a: "Detailed answer goes here." })} className="text-xs font-bold text-white bg-[#006c4d] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#3eb489]">
                                <Plus size={14} /> Add Pair
                            </button>
                        </div>
                        {form.faqArray?.map((item, index) => (
                            <div key={index} className="p-6 border border-gray-100 bg-gray-50 rounded-2xl mb-4 group relative hover:bg-white hover:shadow-md transition-all">
                                <button onClick={() => removeArrayItem('faqArray', index)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></button>
                                <div className="mb-4">
                                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Query</label>
                                    <input value={item.q} onChange={(e) => handleArrayChange('faqArray', index, 'q', e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-xl font-bold text-gray-800" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest">Resolution</label>
                                    <textarea rows={3} value={item.a} onChange={(e) => handleArrayChange('faqArray', index, 'a', e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm italic" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* About */}
                {activeTab === 'about' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div>
                            <label className="block text-[11px] font-black text-[#006c4d] mb-2 uppercase tracking-[0.2em]">Our Legacy Narrative</label>
                            <textarea 
                                rows={10}
                                value={form.about || ""}
                                onChange={(e) => handleInputChange('about', e.target.value)}
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3eb489] focus:bg-white outline-none text-sm leading-relaxed" 
                                placeholder="With over two decades of excellence..."
                            />
                        </div>
                    </div>
                )}

            </div>
         </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
