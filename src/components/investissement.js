import React, { useState} from 'react';
import './investissement.css';

function Investissement() {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleClick = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="investissement-container">
      <h2>Investissements</h2>

      {/* Logiciels */}
      <div
        className={`card-link expandable ${visibleSection === 'logiciels' ? 'active' : ''}`}
        onClick={() => handleClick('logiciels')}
      >
        <div className="card-header">
          Logiciels <span className="arrow">{visibleSection === 'logiciels' ? '^' : '>'}</span>
        </div>
        {visibleSection === 'logiciels' && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <LogicielsDetails />
          </div>
        )}
      </div>

      {/* Academy interne */}
      <div
        className={`card-link expandable ${visibleSection === 'academy' ? 'active' : ''}`}
        onClick={() => handleClick('academy')}
      >
        <div className="card-header">
          Academy interne <span className="arrow">{visibleSection === 'academy' ? '^' : '>'}</span>
        </div>
        {visibleSection === 'academy' && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <AcademyDetails />
          </div>
        )}
      </div>

      {/* Plateforme e-learning */}
      <div
        className={`card-link expandable ${visibleSection === 'elearning' ? 'active' : ''}`}
        onClick={() => handleClick('elearning')}
      >
        <div className="card-header">
          Plateforme e-learning <span className="arrow">{visibleSection === 'elearning' ? '^' : '>'}</span>
        </div>
        {visibleSection === 'elearning' && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <LogicielsDetails />
          </div>
        )}
      </div>

      {/* Participation au trophée */}
      <div
        className={`card-link expandable ${visibleSection === 'trophee' ? 'active' : ''}`}
        onClick={() => handleClick('trophee')}
      >
        <div className="card-header">
          Participation au trophée employeur <span className="arrow">{visibleSection === 'trophee' ? '^' : '>'}</span>
        </div>
        {visibleSection === 'trophee' && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <TropheeDetails />
          </div>
        )}
      </div>
    </div>
  );
}



function LogicielsDetails() {
  const [fournisseur, setFournisseur] = useState('');
  const [acquisition, setAcquisition] = useState('');
  const [caracteristiques, setCaracteristiques] = useState([]);
  const [garantie, setGarantie] = useState([]);
  const [sav, setSav] = useState([]);

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <div className="logiciels-panel">
      <div className="tabs">
        <button className="active">RH</button>
        <button>Paie</button>
        <button>Gestion des compétences</button>
      </div>

<div className="lorem-title">LOREM</div>
      <div className="box">
        <div className="stats">
          <div className="stat-row"><span>Investissement du Trimestre:</span><strong className='chiffre'>1,000</strong></div>
          <div className="stat-row"><span>Investissement total:</span><strong className='chiffre'>10,000</strong></div>
          <div className="stat-row"><span>Niveau:</span><strong className='chiffre'>2</strong></div>
          <div className="stat-row"><span>Progression niveau suivant:</span><strong className='chiffre'>20%</strong></div>
          <div className="stat-row"><span>Coût du passage niveau suivant:</span><strong className='chiffre'>20,000</strong></div>
        </div>
      </div>

      <div className="section horizontal">
        <h4>Choix fournisseurs</h4>
        <label><input type="radio" name="fournisseur" checked={fournisseur === 'international'} onChange={() => setFournisseur('international')} /> Internationaux</label>
        <label><input type="radio" name="fournisseur" checked={fournisseur === 'nationaux'} onChange={() => setFournisseur('nationaux')} /> Nationaux</label>
        <label><input type="radio" name="fournisseur" checked={fournisseur === 'locaux'} onChange={() => setFournisseur('locaux')} /> Locaux</label>
      </div>

      <div className="section horizontal">
        <h4>Mode d’acquisition</h4>
        <label><input type="radio" name="acquisition" checked={acquisition === 'location'} onChange={() => setAcquisition('location')} /> Location</label>
        <label><input type="radio" name="acquisition" checked={acquisition === 'vente'} onChange={() => setAcquisition('vente')} /> Vente</label>
      </div>

      <div className="section horizontal">
        <h4>Caractéristiques</h4>
        {['Lorem ipsum0','Lorem ipsum1','Lorem ipsum2','Lorem ipsum3','Lorem ipsum4'].map((item) => (
          <label key={item}><input type="checkbox" checked={caracteristiques.includes(item)} onChange={() => handleCheckboxChange(item, caracteristiques, setCaracteristiques)} /> {item}</label>
        ))}
      </div>

      <div className="section horizontal">
        <h4>Garantie</h4>
        {['Corrections de Bugs majeurs', 'Compatibilité avec certains systèmes', 'Mise à jour de Sécurité', 'Lorem ipsum'].map((item) => (
          <label key={item}><input type="checkbox" checked={garantie.includes(item)} onChange={() => handleCheckboxChange(item, garantie, setGarantie)} /> {item}</label>
        ))}
      </div>

      <div className="section horizontal">
        <h4>SAV</h4>
        {['Assisatnce technique', 'Mises à jour et évolution de logiciel', 'Formation et documentation par utulisateurs','Lorem ipsum'].map((item) => (
          <label key={item}><input type="checkbox" checked={sav.includes(item)} onChange={() => handleCheckboxChange(item, sav, setSav)} /> {item}</label>
        ))}
      </div>
            <div className="investissement-box">
  <h4>Votre Investissement <span title="Montant à investir">ℹ️</span></h4>

  <div className="prix-wrapper">
    <input
      type="number"
      className="prix-input"
      placeholder="Prix"
    />
    <div className="adjust-buttons">
      <button className="adjust-btn">+</button>
      <button className="adjust-btn">−</button>
    </div>
  </div>

  <div className="previous-value">Valeur précédente : 1000 BA</div>

  <div className="button-group">
    <button className="cancel-btn">Annuler</button>
    <button className="confirm-btn">Confirmer</button>
  </div>
</div>

    </div>
  );
}

function AcademyDetails() {
  return (
    <div className="logiciels-panel">
      <div className="lorem-title">LOREM</div>

      <div className="box">
        <div className="stats">
          <div className="stat-row"><span>Investissement du Trimestre:</span><strong className='chiffre'>1,000</strong></div>
          <div className="stat-row"><span>Investissement total:</span><strong className='chiffre'>10,000</strong></div>
          <div className="stat-row"><span>Niveau:</span><strong className='chiffre'>2</strong></div>
          <div className="stat-row"><span>Progression niveau suivant:</span><strong className='chiffre'>20%</strong></div>
          <div className="stat-row"><span>Coût du passage niveau suivant:</span><strong className='chiffre'>20,000</strong></div>
        </div>
      </div>

      <div className="investissement-box">
        <h4>Votre Investissement <span title="Montant à investir">ℹ️</span></h4>

        <div className="prix-wrapper">
          <input
            type="number"
            className="prix-input"
            placeholder="Prix"
          />
          <div className="adjust-buttons">
            <button className="adjust-btn">+</button>
            <button className="adjust-btn">−</button>
          </div>
        </div>

        <div className="previous-value">Valeur précédente : 1000 BA</div>

        <div className="button-group">
          <button className="cancel-btn">Annuler</button>
          <button className="confirm-btn">Confirmer</button>
        </div>
      </div>
    </div>
  );
}


function TropheeDetails() {
  return (
    <div className="logiciels-panel">
      <div className="investissement-box">
        <div className="double-field">
          <div className="cost-block">
            <label>Coût <span title="Montant du coût">ℹ️</span></label>
            <div className="cost-input-wrapper">
              <input className="cost-input" value="100" readOnly />
              <span className="icon">📋</span>
            </div>
          </div>

          <div className="invest-block">
            <label>Votre Investissement <span title="Montant à investir">ℹ️</span></label>
            <div className="prix-wrapper">
              <input
                type="number"
                className="prix-input"
                placeholder="Prix"
              />
              <div className="adjust-buttons">
                <button className="adjust-btn">+</button>
                <button className="adjust-btn">−</button>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="cancel-btn">Annuler</button>
          <button className="confirm-btn">Confirmer</button>
        </div>
      </div>
    </div>
  );
}



export default Investissement;
