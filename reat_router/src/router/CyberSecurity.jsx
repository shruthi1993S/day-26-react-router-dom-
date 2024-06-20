import React from 'react'
import cyberSecurityImg from '../assets/cybersecurity.jpeg';

function CyberSecurity() {
  return (
    <div>
            <h2>Cyber Security</h2>
            <img src={cyberSecurityImg} alt="Cyber Security" style={{ width: '100%', height: 'auto' }} />
            <p>Enhance your knowledge of Cyber Security with our expert-led courses. Learn about network security, ethical hacking, cryptography, and risk management. Protect sensitive information and secure digital assets from cyber threats.</p>
        </div>
  )
}

export default CyberSecurity