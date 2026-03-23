import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RequestForm.css";

import {
  User, Phone, MapPin, Calendar,
  Plus, Trash2, Send, Edit, Check, X,
  AlertCircle, CheckCircle2
} from "lucide-react";

function RequestForm() {
  const navigate = useNavigate();

  const [isEditingCustomer, setIsEditingCustomer] = useState(false);

  const [customer, setCustomer] = useState({
    name: "Renuka Jeevani",
    phone: "+94 77 XXX XXXX",
    location: "Galkanda, Sri Lanka"
  });

  const [requiredDate, setRequiredDate] = useState("");

  const [materials, setMaterials] = useState([
    { id: 1, name: "", unit: "kg", quantity: "", condition: "Fresh", type: "Herb", part: "Leaf" }
  ]);

  const [formStatus, setFormStatus] = useState("idle");     // idle | submitting | success | error
  const [validationMsg, setValidationMsg] = useState("");

  const addMaterial = () => {
    const newId = Math.max(...materials.map(m => m.id), 0) + 1;
    setMaterials([
      ...materials,
      { id: newId, name: "", unit: "kg", quantity: "", condition: "Fresh", type: "Herb", part: "Leaf" }
    ]);
  };

  const removeMaterial = (id) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const updateMaterial = (id, field, value) => {
    setMaterials(
      materials.map(m =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!requiredDate) {
      setValidationMsg("Please select a required date.");
      return false;
    }

    const invalidMaterials = materials.some(m =>
      !m.name.trim() ||
      !m.quantity ||
      Number(m.quantity) <= 0
    );

    if (invalidMaterials) {
      setValidationMsg("All materials must have a name and valid quantity (> 0).");
      return false;
    }

    setValidationMsg("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setTimeout(() => setValidationMsg(""), 6000);
      return;
    }

    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.15;
      setFormStatus(success ? "success" : "error");
    }, 1400);
  };

  const handleCancel = () => {
    navigate("/");           // ← or "/home", "/dashboard" etc.
  };

  const closeSuccessPopup = () => {
    setFormStatus("idle");
    navigate("/");
  };

  return (
    <div className="app-container">

      {/* 🌿 FLOATING BACKGROUND */}
      <div className="bg bg1">🌾</div>
      <div className="bg bg2">🫚</div>
      <div className="bg bg3">🌸</div>
      <div className="bg bg4">🌿</div>
      <div className="bg bg5">🪨</div>

      <main className="main-content">

        <div className="hero">
          <h1>Post Your Raw Material Requirement</h1>
          <p>Connect directly with verified Sri Lankan suppliers</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>

          <section className="customer-section">
            <div className="section-header">
              <h3>Customer Details</h3>
              <button
                type="button"
                className={`btn-edit ${isEditingCustomer ? "active" : ""}`}
                onClick={() => setIsEditingCustomer(!isEditingCustomer)}
              >
                {isEditingCustomer ?
                  <><Check size={16} /> Done</> :
                  <><Edit size={16} /> Edit</>
                }
              </button>
            </div>

            <div className="grid-4">
              <div className="form-group">
                <label><User size={14}/> Name</label>
                {isEditingCustomer ?
                  <input type="text" name="name" value={customer.name} onChange={handleCustomerChange}/> :
                  <div className="readonly-value">{customer.name}</div>
                }
              </div>

              <div className="form-group">
                <label><Phone size={14}/> Phone</label>
                {isEditingCustomer ?
                  <input type="text" name="phone" value={customer.phone} onChange={handleCustomerChange}/> :
                  <div className="readonly-value">{customer.phone}</div>
                }
              </div>

              <div className="form-group">
                <label><MapPin size={14}/> Location</label>
                {isEditingCustomer ?
                  <input type="text" name="location" value={customer.location} onChange={handleCustomerChange}/> :
                  <div className="readonly-value">{customer.location}</div>
                }
              </div>

              <div className="form-group">
                <label><Calendar size={14}/> Required Date</label>
                <input
                  type="date"
                  value={requiredDate}
                  onChange={e => setRequiredDate(e.target.value)}
                  required
                />
              </div>
            </div>
          </section>

          <section className="materials-section">
            <h3>Materials Needed</h3>

            <div className="table-container-req">
              <table className="req-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Raw Material</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>State</th>
                    <th>Type</th>
                    <th>Part</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {materials.map((material, index) => (
                    <tr key={material.id} className="req-row">
                      <td className="req-no">{index + 1}</td>
                      <td>
                        <input
                          placeholder="Enter material name"
                          value={material.name}
                          onChange={e => updateMaterial(material.id, "name", e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="0.01"
                          step="0.01"
                          placeholder="Qty"
                          value={material.quantity}
                          onChange={e => updateMaterial(material.id, "quantity", e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <select value={material.unit} onChange={e => updateMaterial(material.id, "unit", e.target.value)}>
                          <option>kg</option>
                          <option>g</option>
                          <option>L</option>
                        </select>
                      </td>
                      <td>
                        <select value={material.condition} onChange={e => updateMaterial(material.id, "condition", e.target.value)}>
                          <option>Fresh</option>
                          <option>Dried</option>
                          <option>Powder</option>
                        </select>
                      </td>
                      <td>
                        <select value={material.type} onChange={e => updateMaterial(material.id, "type", e.target.value)}>
                          <option>Spice</option>
                          <option>Herb</option>
                        </select>
                      </td>
                      <td>
                        <select value={material.part} onChange={e => updateMaterial(material.id, "part", e.target.value)}>
                          <option>Root</option>
                          <option>Leaf</option>
                          <option>Bark</option>
                        </select>
                      </td>
                      <td>
                        <button type="button" className="btn-remove" onClick={() => removeMaterial(material.id)}>
                          <Trash2 size={18}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button type="button" className="btn btn-outline add-btn" onClick={addMaterial}>
              <Plus size={16}/> Add Another Item
            </button>

            <div className="actions">
              <button type="button" className="btn btn-outline cancel-btn-themed" onClick={handleCancel}>
                <X size={16}/> Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Submitting..." : <>
                  <Send size={16}/> Submit Requirement
                </>}
              </button>
            </div>

            {validationMsg && (
              <div className="form-alert warning-alert">
                <AlertCircle size={20} />
                <span>{validationMsg}</span>
              </div>
            )}

            {formStatus === "error" && (
              <div className="form-alert error-alert">
                <AlertCircle size={20} />
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}
          </section>
        </form>

        {/* SUCCESS POPUP / MODAL */}
        {formStatus === "success" && (
          <div className="success-popup-overlay">
            <div className="success-popup">
              <button className="popup-close-btn" onClick={closeSuccessPopup}>
                <X size={24} />
              </button>

              <CheckCircle2 size={64} className="success-popup-icon" />
              <h2>Success!</h2>
              <p>Your raw material requirement has been posted successfully.</p>
              <p className="success-subtitle">Suppliers will contact you soon.</p>

              <button className="success-popup-btn" onClick={closeSuccessPopup}>
                Return to Home
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default RequestForm;