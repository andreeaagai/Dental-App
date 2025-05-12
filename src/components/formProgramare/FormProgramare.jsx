import React, { useState } from 'react';
import './FormProgramare.css';
import ScrollButton from '../ScrollButton';
import emailjs from 'emailjs-com'


const FormProgramare = () => {

    const [formData, setFormData] = useState({
        nume: '',
        telefon: '',
        data: '',
        ora: '',
        specializare: '',
        mesaj: ''
    });
    
    const specializari = [
        "Consultatie",
        "Igienizare Dentara",
        "Tratament Carii",
        "Tratament de Canal",
        "Coroane si Punți Dentare",
        "Proteze Dentare",
        "Fatete Dentare",
        "Chirurgie",
        "Dinti Ficsi in 24 de Ore",
        "Implaturi Dentare",
        "Albire Dentara",
        "Ortodontie",
        "Parodontologie",
        "Endodontie",
    ];
    
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus('sending');

       
        emailjs.send(
        'service_qmmvhaq', // Service ID
        'template_yx3408f', // Template ID
        formData,
        'GetiRf6jZoBPBguEX' // User ID
        )
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
            nume: '',
            telefon: '',
            data: '',
            ora: '',
            specializare: '',
            mesaj: ''
        });
        }, (err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
        });
    };
    
    return (
        <section className="programare-section">
            <div className="programare-header">
                <h2>Programări Online</h2>
                <p>Programează-te rapid la unul dintre medicii noștri</p>
            </div>
    
            <form onSubmit={handleSubmit} className="programare-form">
                <h3>Programează o Consultație</h3>
      
                <div className="form-group">
                    <label htmlFor="nume">Nume</label>
                    <input
                        type="text"
                        id="nume"
                        name="nume"
                        value={formData.nume}
                        onChange={handleChange}
                        required
                    />
                </div>
      
                <div className="form-group">
                    <label htmlFor="telefon">Telefon</label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="specializare">Specializare</label>
                    <select
                        id="specializare"
                        name="specializare"
                        value={formData.specializare}
                        onChange={handleChange}
                        required
                        className="specializare-select"
                    >
                        <option value="">Selectează specializarea</option>
          
                        {specializari.map((spec, index) => (
                            <option key={index} value={spec}>{spec}</option>
                        ))}
                    </select>
                </div>
      
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="data">Data</label>
                        <input
                            type="date"
                            id="data"
                            name="data"
                            value={formData.data}
                            onChange={handleChange}
                            required
                        />
                    </div>
        
                    <div className="form-group">
                        <label htmlFor="ora">Ora</label>
                        <input
                            type="time"
                            id="ora"
                            name="ora"
                            value={formData.ora}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
      
                <div className="form-group">
                    <label htmlFor="mesaj">Mesaj (opțional)</label>
                    <textarea
                        id="mesaj"
                        name="mesaj"
                        value={formData.mesaj}
                        onChange={handleChange}
                        rows="3"
                    />
                </div>
                    
                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={submitStatus === 'sending'}
                >
                    {submitStatus === 'sending' ? 'Se trimite...' : 'TRIMITE CEREREA DE PROGRAMARE'}
                </button>
                
                {submitStatus === 'success' && (
                    <div className="success-message">
                    ✔ Programare trimisă cu succes! Vă vom contacta în scurt timp.
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="error-message">
                    ✖ Eroare la trimitere. Te rugăm să încerci din nou sau să ne contactezi telefonic.
                    </div>
                )}
                
            </form>
    
            <div className="vezi-echipa">
                <p>Descoperă zâmbetul perfect la eDENTIFY</p>  
                    <ScrollButton 
                        sectionId="ourTeam" 
                        pagePath="/" 
                        className="vezi-echipa-btn"
                    >
                        VEZI ECHIPA NOASTRĂ
                    </ScrollButton>
            </div>
        </section>
      
    );
};

export default FormProgramare;