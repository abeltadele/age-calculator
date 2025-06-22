
document.addEventListener('DOMContentLoaded', function() {
    // Set max date to today for birthdate input
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('birthdate').setAttribute('max', today);
    
    // Set target date to today by default
    document.getElementById('target-date').value = today;
    
    const calculateBtn = document.getElementById('calculate-btn');
    
    calculateBtn.addEventListener('click', function() {
        calculateAge();
    });
    
    function calculateAge() {
        const birthdateInput = document.getElementById('birthdate').value;
        const targetDateInput = document.getElementById('target-date').value || today;
 
        if (!birthdateInput) {
            alert('Please enter your birthdate');
            return;
        }
        
        const birthdate = new Date(birthdateInput);
        const targetDate = new Date(targetDateInput);
        
        if (birthdate > targetDate) {
            alert('Birthdate cannot be in the future');
            return;
        }
        
        // Calculate age
        let years = targetDate.getFullYear() - birthdate.getFullYear();
        let months = targetDate.getMonth() - birthdate.getMonth();
        let days = targetDate.getDate() - birthdate.getDate();
        
        if (days < 0) {
            months--;
            // Get days in the previous month
            const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
            days += prevMonth.getDate();
        }
        
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Calculate total days
        const diffTime = Math.abs(targetDate - birthdate);
        const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        // Calculate hours
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        
        // Display results
        document.querySelector('.age-result').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = totalDays;
        document.getElementById('hours').textContent = diffHours.toLocaleString();
        
        // Add animation effect
        const result = document.querySelector('.age-result');
        result.style.transform = 'scale(1.1)';
        setTimeout(() => {
            result.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Initialize with a sample birthdate
    const sampleDate = new Date();
    sampleDate.setFullYear(sampleDate.getFullYear() - 25);
    document.getElementById('birthdate').valueAsDate = sampleDate;
    
    // Calculate on load
    calculateAge();
});
