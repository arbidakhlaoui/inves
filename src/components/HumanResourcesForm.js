import React, { useState } from 'react';
import { useRef } from 'react';
import Select from 'react-select';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style
import 'react-date-range/dist/theme/default.css'; // theme style
import { FaFilter, FaSearch, FaWallet, FaCheck, FaCalendarAlt } from "react-icons/fa";
import { fr } from 'date-fns/locale';
import './HumanResourcesForm.css';

function HumanResourcesForm() {
    // 1. Create a state variable for active tab, default 0 (first tab)
    const [activeTab, setActiveTab] = useState(0);

  // 2. Function to handle tab clicks
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const effectifRef = useRef(null);
    const salaireRef = useRef(null);

    const options = [
     { value: 'universites-locales', label: 'Universités locales' },
     { value: 'universites-nationales', label: 'Universités nationales' },
     { value: 'centres-formation', label: 'Centres de formation' },
     { value: 'forums', label: 'Des forums de recrutement régionaux' },
     { value: 'stages', label: 'Des programmes de stages' },
     { value: 'recrutement-libre', label: 'Recrutement libre' },
     { value: 'concurrents', label: 'Concurrents' }
    ];
    
 

    const [selectedOption, setSelectedOption] = useState(null);

    const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);

    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);



    return (
      <div className="hr-form">
        <h2>Vos décisions : Département Human-resources</h2>
  
        {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleTabClick(0)}
        >
          Recrutement des collaborateurs externes
        </button>
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Gestion des talents en interne
        </button>
      </div>
  
        {/* First tab content with your form */}
      {activeTab === 0 && (
        <div>
          {/* Form fields */}
          <div className="form-group">
            <div className="top-row">
              <div className="input-wrapper">
                <label htmlFor="effectif">Effectif<span className="info-icon">!</span></label>
                <input ref={effectifRef} type="number" placeholder="Effectif" />
                <div className="custom-controls">
                  <div onClick={() => effectifRef.current.stepDown()} className="minus">−</div>
                  <div onClick={() => effectifRef.current.stepUp()} className="plus">+</div>
               </div>
             </div>
             <div className="input-wrapper">
              <label htmlFor="salaire">Salaire<span className="info-icon">!</span></label>
              <input ref={salaireRef} type="number" placeholder="Salaire" />
              <div className="custom-controls">
                <div onClick={() => salaireRef.current.stepDown()} className="minus">−</div>
                <div onClick={() => salaireRef.current.stepUp()} className="plus">+</div>
              </div>
            </div>
          </div>
          <label htmlFor="formations">Formations<span className="info-icon">!</span></label>
          <input type="text" placeholder="Formations" className="full-width" />
       </div>



        <div className="form-group">
          <div className="row">
            <div className="form-input">
              <label>Sourcing des compétences<span className="info-icon">!</span></label>
              <Select
                className="custom-select"
                classNamePrefix="react-select"
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder="Effectif"
                formatOptionLabel={(data, { context, selectValue }) => (
                <div className="option-label">
                  {context === 'menu' && selectValue.includes(data) && (
                  <FaCheck className="checkmark-icon" />
                  )}
                  <span>{data.label}</span>
                </div>
                )}
              />
            </div>


            {/* Budget Display Box */}
           <div className="budget-sourcing" style={{ flex: 1 }}>
             <label>Budget<span className="info-icon">!</span></label>
             <div className="budget-box">
               <span>100</span>
               <FaWallet className="wallet-icon" />
             </div>
           </div>
          </div>
        </div>

        <div className="cv-section">
                <h4>Choix des compétences par département<span className="info-icon">!</span></h4>

                {/* Main White Box */}
                <div className="cv-card">

                        {/* Département select */}
                        <select className="department-select">
                                <option>Département 1</option>
                                <option>Département 2</option>
                        </select>

                        {/* Filters + Result Row */}
                        <div className="cv-content-row">

                                {/* Left Side: Filters */}
                                <div className="cv-filter">
                                        <div>
                                                <label>Qualification:</label><br />
                                                <input type="radio" name="qualif" /> Expérimenté<br />
                                                <input type="radio" name="qualif" /> Non Expérimenté
                                        </div>

                                        <div>
                                                <label>Genre:</label><br />
                                                <input type="radio" name="genre" /> Femme<br />
                                                <input type="radio" name="genre" /> Homme
                                        </div>

                                        <div className="age-input-group">
                                                <label>Age:</label><br />
                                                <input type="number" />
                                        </div>

                                        <button className="search-btn">Search</button>
                                </div>

                                {/* Right Side: CV Results */}
                                <div className="cv-result-box">
                                        <label>Listes des CV</label>
                                        <div className="cv-list-placeholder">
                                                Choisissez le département pour afficher les CV <br />
                                                disponibles pour ce département.
                                        </div>
                                </div>

                        </div>

                </div>
        </div>

        </div>
      )}

      {/* Second tab content with small text */}
      {activeTab === 1 && (
        <div className="team-members-container">
          <h3>les membres de l'équipe <span className="count-badge">100</span></h3>
          {/* Top Bar */}
          <div className="table-controls">
                  <div className="search-wrapper">
                    <input type="text" placeholder="Search" className="search-input" />
                    <FaSearch className="search-icon" />
                  </div>
                    <button className="filter-btn">
                      <FaFilter className="filter-icon" />
                      Filter
                    </button>
                    <div className="calendar-group">
                     <button
                      className="calendar-toggle-btn"
                      onClick={() => setShowCalendar(!showCalendar)}
                      ria-label="Toggle calendar"
                     >
                        <FaCalendarAlt size={20} />
                     </button>
                     <span className="selected-count">{selectedRows.length} Selected</span>
                  </div>

          </div>

          {/* Table */}
          <table className="team-table">
                    <thead>
                              <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>Membre</th>
                                        <th>Département</th>
                                        <th>Date de début de travail</th>
                                        <th>Niveau</th>
                                        <th>Actions</th>
                              </tr>
                    </thead>
                                        <tbody>
                    {[...Array(10)].map((_, idx) => {
                        const isChecked = selectedRows.includes(idx);

                        const toggleCheckbox = () => {
                            if (isChecked) {
                                setSelectedRows(selectedRows.filter(i => i !== idx));
                            } else {
                                setSelectedRows([...selectedRows, idx]);
                            }
                        };

                        return (
                            <tr key={idx}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={toggleCheckbox}
                                    />
                                </td>
                                <td>
                                    <div className="member-info">
                                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" />
                                        <div>
                                            <strong>Zey Lang</strong><br />
                                            <span>Talent Lead</span>
                                        </div>
                                    </div>
                                </td>
                                <td>Département 1</td>
                                <td>Dec 11th, 2023</td>
                                <td>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: "50%" }}></div>
                                        <span>50%</span>
                                    </div>
                                </td>
                                <td>
                                    <button className="action-btn">Gestion permission</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>

          </table>

          {/* Pagination */}
          <div className="pagination-bar">
           <div className="pagination-left">
              {[1, 2, 3, 4, 5].map(num => (
              <button key={num} className="page-btn">{num}</button>
              ))}
           </div>

           <div className="pagination-right">
            <span>{selectedRows.length} of 100 selected</span>
            <button className="page-btn">Previous</button>
            <button className="page-btn">Next</button>
          </div>
          </div>
</div>

      )}
      {showCalendar && (
      <div className="calendar-popup">
        <DateRangePicker
         onChange={item => setState([item.selection])}
         showSelectionPreview={true}
         moveRangeOnFirstSelection={false}
         months={2}
         ranges={state}
         direction="horizontal"
         locale={fr}  // or enUS if you want English
        />
       <div className="calendar-buttons">
        <button className="btn-cancel" onClick={() => setShowCalendar(false)}>Cancel</button>
        <button className="btn-update" onClick={() => setShowCalendar(false)}>Update</button>
       </div>
     </div>
)}
     {/* Action buttons */}
          <div className="form-buttons">
            <button className="btn-cancel">Annuler</button>
            <button className="btn-confirm">Confirmer</button>
          </div>
    </div>
  );
}




export default HumanResourcesForm;