// SoluPred AI - Real-time ML Solubility Prediction Platform
class SoluPredAI {
    constructor() {
        this.currentModel = 'random_forest';
        this.predictionHistory = [];
        this.charts = {};
        this.isRealTimeMode = false;
        this.predictionCount = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeCharts();
        this.loadSampleData();
        this.setupRealTimeUpdates();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Real-time prediction button in header
        document.getElementById('realTimePredictBtn').addEventListener('click', () => {
            this.switchTab('predict');
        });

        // Input method toggle
        document.querySelectorAll('input[name="inputMethod"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.toggleInputMethod(e.target.value);
            });
        });

        // Model selection
        document.getElementById('modelSelect').addEventListener('change', (e) => {
            this.currentModel = e.target.value;
            this.updateModelInfo();
        });

        // Prediction button
        document.getElementById('predictBtn').addEventListener('click', () => {
            this.performPrediction();
        });

        // File upload handlers
        this.setupFileUpload();

        // Real-time input changes
        this.setupRealTimeInputs();
    }

    setupRealTimeInputs() {
        const inputs = ['molLogP', 'molWt', 'numRotatableBonds', 'aromaticProportion'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', () => {
                    if (this.isRealTimeMode) {
                        this.debouncedPredict();
                    }
                });
            }
        });

        // SMILES input real-time processing
        document.getElementById('smilesString').addEventListener('input', () => {
            if (this.isRealTimeMode) {
                this.debouncedPredict();
            }
        });
    }

    debouncedPredict = this.debounce(() => {
        if (this.validateInputs()) {
            this.performPrediction();
        }
    }, 500);

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    switchTab(tabName) {
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
            tab.classList.add('hidden');
        });
        
        const targetTab = document.getElementById(`${tabName}-tab`);
        if (targetTab) {
            targetTab.classList.remove('hidden');
            targetTab.classList.add('active');
        }

        // Enable real-time mode for predict tab
        this.isRealTimeMode = (tabName === 'predict');
        
        // Refresh charts if needed
        if (tabName === 'dashboard') {
            this.refreshDashboardCharts();
        } else if (tabName === 'analysis') {
            this.refreshAnalysisCharts();
        }
    }

    toggleInputMethod(method) {
        const manualInput = document.getElementById('manualInput');
        const smilesInput = document.getElementById('smilesInput');
        
        if (method === 'manual') {
            manualInput.classList.remove('hidden');
            smilesInput.classList.add('hidden');
        } else {
            manualInput.classList.add('hidden');
            smilesInput.classList.remove('hidden');
        }
    }

    validateInputs() {
        const inputMethod = document.querySelector('input[name="inputMethod"]:checked').value;
        
        if (inputMethod === 'manual') {
            const molLogP = parseFloat(document.getElementById('molLogP').value);
            const molWt = parseFloat(document.getElementById('molWt').value);
            const numRotatableBonds = parseInt(document.getElementById('numRotatableBonds').value);
            const aromaticProportion = parseFloat(document.getElementById('aromaticProportion').value);
            
            return !isNaN(molLogP) && !isNaN(molWt) && !isNaN(numRotatableBonds) && !isNaN(aromaticProportion);
        } else {
            const smilesString = document.getElementById('smilesString').value.trim();
            return smilesString.length > 0;
        }
    }

    async performPrediction() {
        if (!this.validateInputs()) {
            this.showMessage('Please fill in all required fields', 'error');
            return;
        }

        const predictBtn = document.getElementById('predictBtn');
        const originalText = predictBtn.innerHTML;
        
        // Show loading state
        predictBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Predicting...';
        predictBtn.disabled = true;

        try {
            const features = await this.extractFeatures();
            const prediction = await this.predictSolubility(features);
            
            this.displayPredictionResult(prediction);
            this.addToPredictionHistory(prediction);
            this.updateStats();
            this.updateLiveChart(prediction);
            
        } catch (error) {
            console.error('Prediction error:', error);
            this.showMessage('Prediction failed. Please try again.', 'error');
        } finally {
            // Reset button
            predictBtn.innerHTML = originalText;
            predictBtn.disabled = false;
        }
    }

    async extractFeatures() {
        const inputMethod = document.querySelector('input[name="inputMethod"]:checked').value;
        
        if (inputMethod === 'manual') {
            return {
                MolLogP: parseFloat(document.getElementById('molLogP').value),
                MolWt: parseFloat(document.getElementById('molWt').value),
                NumRotatableBonds: parseInt(document.getElementById('numRotatableBonds').value),
                AromaticProportion: parseFloat(document.getElementById('aromaticProportion').value)
            };
        } else {
            // Simulate SMILES to features conversion
            const smilesString = document.getElementById('smilesString').value.trim();
            return this.simulateSMILESExtraction(smilesString);
        }
    }

    simulateSMILESExtraction(smiles) {
        // Simulate feature extraction from SMILES string
        const hash = this.hashCode(smiles);
        const random = new Random(hash);
        
        return {
            MolLogP: random.nextFloat(-2, 6),
            MolWt: random.nextFloat(100, 500),
            NumRotatableBonds: random.nextInt(0, 15),
            AromaticProportion: random.nextFloat(0, 1)
        };
    }

    async predictSolubility(features) {
        // Simulate ML model prediction with realistic behavior
        return new Promise(resolve => {
            setTimeout(() => {
                const prediction = this.simulateMLPrediction(features);
                resolve(prediction);
            }, Math.random() * 1000 + 500); // 500-1500ms delay
        });
    }

    simulateMLPrediction(features) {
        const { MolLogP, MolWt, NumRotatableBonds, AromaticProportion } = features;
        
        // Simulate different ML models with realistic solubility prediction
        let logS;
        let accuracy;
        let confidence;
        
        switch (this.currentModel) {
            case 'random_forest':
                logS = -0.74 * MolLogP - 0.0066 * MolWt + 0.1 * NumRotatableBonds - 1.2 * AromaticProportion + Math.random() * 0.5 - 0.25;
                accuracy = 85.7;
                confidence = Math.random() * 20 + 80;
                break;
                
            case 'linear_regression':
                logS = -0.8 * MolLogP - 0.005 * MolWt + 0.08 * NumRotatableBonds - 1.0 * AromaticProportion + Math.random() * 0.8 - 0.4;
                accuracy = 78.3;
                confidence = Math.random() * 15 + 75;
                break;
                
            case 'svm':
                logS = -0.72 * MolLogP - 0.007 * MolWt + 0.12 * NumRotatableBonds - 1.15 * AromaticProportion + Math.random() * 0.6 - 0.3;
                accuracy = 82.1;
                confidence = Math.random() * 18 + 78;
                break;
                
            case 'decision_tree':
                logS = -0.76 * MolLogP - 0.0055 * MolWt + 0.09 * NumRotatableBonds - 1.1 * AromaticProportion + Math.random() * 0.7 - 0.35;
                accuracy = 79.8;
                confidence = Math.random() * 16 + 72;
                break;
                
            case 'knn':
                logS = -0.75 * MolLogP - 0.0062 * MolWt + 0.11 * NumRotatableBonds - 1.18 * AromaticProportion + Math.random() * 0.65 - 0.325;
                accuracy = 81.5;
                confidence = Math.random() * 17 + 76;
                break;
        }

        // Determine solubility category
        let category, categoryClass;
        if (logS > -1) {
            category = 'High Solubility';
            categoryClass = 'solubility-high';
        } else if (logS > -3) {
            category = 'Medium Solubility';
            categoryClass = 'solubility-medium';
        } else if (logS > -5) {
            category = 'Low Solubility';
            categoryClass = 'solubility-low';
        } else {
            category = 'Very Low Solubility';
            categoryClass = 'solubility-very-low';
        }

        return {
            logS: parseFloat(logS.toFixed(2)),
            category,
            categoryClass,
            accuracy: parseFloat(accuracy.toFixed(1)),
            confidence: parseFloat(confidence.toFixed(0)),
            model: this.currentModel,
            features,
            timestamp: new Date(),
            featureImportance: {
                MolLogP: Math.random() * 0.4 + 0.3,
                MolWt: Math.random() * 0.3 + 0.2,
                NumRotatableBonds: Math.random() * 0.2 + 0.1,
                AromaticProportion: Math.random() * 0.3 + 0.2
            }
        };
    }

    displayPredictionResult(prediction) {
        // Show results panel
        document.getElementById('noResults').classList.add('hidden');
        const resultsPanel = document.getElementById('predictionResults');
        resultsPanel.classList.remove('hidden');
        resultsPanel.classList.add('result-appear');

        // Update prediction values
        document.getElementById('predictedLogS').textContent = prediction.logS;
        document.getElementById('modelAccuracy').textContent = prediction.accuracy + '%';
        document.getElementById('confidence').textContent = prediction.confidence + '%';
        
        const categoryElement = document.getElementById('solubilityCategory');
        categoryElement.textContent = prediction.category;
        categoryElement.className = `inline-block px-3 py-1 rounded-full text-sm font-medium ${prediction.categoryClass}`;

        // Update feature importance
        this.updateFeatureImportance(prediction.featureImportance);
        
        // Add real-time indicator
        if (this.isRealTimeMode) {
            const indicator = document.createElement('span');
            indicator.className = 'real-time-indicator';
            indicator.textContent = 'LIVE';
            document.querySelector('#predictionResults .text-center').appendChild(indicator);
            
            setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.remove();
                }
            }, 3000);
        }
    }

    updateFeatureImportance(importance) {
        const container = document.getElementById('featureImportance');
        container.innerHTML = '';
        
        Object.entries(importance).forEach(([feature, value]) => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'flex items-center justify-between mb-2';
            
            featureDiv.innerHTML = `
                <span class="text-sm text-gray-600">${feature}</span>
                <div class="flex items-center ml-4">
                    <div class="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div class="feature-bar h-2 rounded-full" style="width: ${value * 100}%"></div>
                    </div>
                    <span class="text-xs text-gray-500">${(value * 100).toFixed(0)}%</span>
                </div>
            `;
            
            container.appendChild(featureDiv);
        });
    }

    addToPredictionHistory(prediction) {
        this.predictionHistory.unshift(prediction);
        if (this.predictionHistory.length > 10) {
            this.predictionHistory.pop();
        }
        
        this.updatePredictionHistoryDisplay();
        this.predictionCount++;
    }

    updatePredictionHistoryDisplay() {
        const historyContainer = document.getElementById('predictionHistory');
        historyContainer.innerHTML = '';
        
        if (this.predictionHistory.length === 0) {
            historyContainer.innerHTML = '<p class="text-gray-500 text-sm">No predictions yet</p>';
            return;
        }
        
        this.predictionHistory.forEach((pred, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'flex justify-between items-center p-2 bg-gray-50 rounded text-sm';
            
            const timeStr = pred.timestamp.toLocaleTimeString();
            historyItem.innerHTML = `
                <div>
                    <span class="font-medium">${pred.logS}</span>
                    <span class="text-gray-500 ml-2">(${pred.model})</span>
                </div>
                <span class="text-gray-400">${timeStr}</span>
            `;
            
            historyContainer.appendChild(historyItem);
        });
    }

    updateStats() {
        document.getElementById('predictionsCount').textContent = this.predictionCount;
        
        if (this.predictionHistory.length > 0) {
            const avgLogS = this.predictionHistory.reduce((sum, pred) => sum + pred.logS, 0) / this.predictionHistory.length;
            document.getElementById('avgLogS').textContent = avgLogS.toFixed(2);
        }
    }

    initializeCharts() {
        this.createPerformanceChart();
        this.createSolubilityDistributionChart();
        this.createLiveChart();
        this.createScatterChart();
        this.createRadarChart();
        this.createLineChart();
    }

    createPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        this.charts.performance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Linear Regression', 'Random Forest', 'Decision Tree', 'SVM', 'KNN'],
                datasets: [{
                    label: 'R² Score',
                    data: [0.783, 0.857, 0.798, 0.821, 0.815],
                    backgroundColor: [
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6'
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1,
                        grid: {
                            color: '#f3f4f6'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    createSolubilityDistributionChart() {
        const ctx = document.getElementById('solubilityChart');
        if (!ctx) return;

        this.charts.solubility = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['High Solubility', 'Medium Solubility', 'Low Solubility', 'Very Low Solubility'],
                datasets: [{
                    data: [25, 45, 20, 10],
                    backgroundColor: [
                        '#10b981',
                        '#3b82f6',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    createLiveChart() {
        const ctx = document.getElementById('liveChart');
        if (!ctx) return;

        this.charts.live = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Real-time Predictions',
                    data: [],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'LogS Value'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createScatterChart() {
        const ctx = document.getElementById('scatterChart');
        if (!ctx) return;

        // Generate sample data
        const sampleData = Array.from({length: 20}, (_, i) => {
            const actual = (Math.random() - 0.5) * 6;
            const predicted = actual + (Math.random() - 0.5) * 1.5;
            return {x: actual, y: predicted};
        });

        this.charts.scatter = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Actual vs Predicted',
                    data: sampleData,
                    backgroundColor: '#6366f1',
                    borderColor: '#4f46e5'
                }, {
                    label: 'Perfect Prediction',
                    data: [{x: -3, y: -3}, {x: 3, y: 3}],
                    type: 'line',
                    borderColor: '#ef4444',
                    borderDash: [5, 5],
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Actual LogS'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Predicted LogS'
                        }
                    }
                }
            }
        });
    }

    createRadarChart() {
        const ctx = document.getElementById('radarChart');
        if (!ctx) return;

        this.charts.radar = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'Speed'],
                datasets: [{
                    label: 'Random Forest',
                    data: [85, 82, 88, 85, 75],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)'
                }, {
                    label: 'Linear Regression',
                    data: [78, 76, 79, 77, 95],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    createLineChart() {
        const ctx = document.getElementById('lineChart');
        if (!ctx) return;

        const sampleData = Array.from({length: 20}, (_, i) => {
            return (Math.random() - 0.5) * 6;
        });

        this.charts.line = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 20}, (_, i) => `Sample ${i + 1}`),
                datasets: [{
                    label: 'Actual LogS',
                    data: sampleData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                }, {
                    label: 'Predicted LogS',
                    data: sampleData.map(val => val + (Math.random() - 0.5) * 1),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'LogS Value'
                        }
                    }
                }
            }
        });
    }

    updateLiveChart(prediction) {
        if (!this.charts.live) return;

        const chart = this.charts.live;
        const timeLabel = new Date().toLocaleTimeString();

        chart.data.labels.push(timeLabel);
        chart.data.datasets[0].data.push(prediction.logS);

        // Keep only last 20 predictions
        if (chart.data.labels.length > 20) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }

        chart.update('none');
    }

    refreshDashboardCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.update();
        });
    }

    refreshAnalysisCharts() {
        if (this.charts.scatter) this.charts.scatter.update();
        if (this.charts.radar) this.charts.radar.update();
        if (this.charts.line) this.charts.line.update();
    }

    setupFileUpload() {
        // Batch prediction file upload
        const batchUpload = document.getElementById('batchUpload');
        const batchFileInput = document.getElementById('batchFile');

        batchUpload.addEventListener('click', () => {
            batchFileInput.click();
        });

        batchUpload.addEventListener('dragover', (e) => {
            e.preventDefault();
            batchUpload.classList.add('upload-drag-over');
        });

        batchUpload.addEventListener('dragleave', () => {
            batchUpload.classList.remove('upload-drag-over');
        });

        batchUpload.addEventListener('drop', (e) => {
            e.preventDefault();
            batchUpload.classList.remove('upload-drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.processBatchFile(files[0]);
            }
        });

        batchFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.processBatchFile(e.target.files[0]);
            }
        });

        // Training data upload
        const uploadArea = document.getElementById('uploadArea');
        const dataFileInput = document.getElementById('dataFile');

        uploadArea.addEventListener('click', () => {
            dataFileInput.click();
        });

        dataFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.processTrainingData(e.target.files[0]);
            }
        });
    }

    async processBatchFile(file) {
        if (!file.name.endsWith('.csv')) {
            this.showMessage('Please upload a CSV file', 'error');
            return;
        }

        this.showMessage('Processing batch predictions...', 'info');
        
        try {
            const text = await this.readFileAsText(file);
            const rows = this.parseCSV(text);
            
            let successCount = 0;
            for (const row of rows) {
                try {
                    const prediction = await this.predictSolubility(row);
                    this.addToPredictionHistory(prediction);
                    successCount++;
                } catch (error) {
                    console.error('Batch prediction error:', error);
                }
            }
            
            this.showMessage(`Successfully processed ${successCount} predictions`, 'success');
            this.updateStats();
            
        } catch (error) {
            this.showMessage('Error processing file: ' + error.message, 'error');
        }
    }

    async processTrainingData(file) {
        this.showMessage('Training data uploaded successfully!', 'success');
        // Simulate model retraining
        setTimeout(() => {
            this.showMessage('Models retrained with new data', 'success');
        }, 2000);
    }

    readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(new Error('File reading failed'));
            reader.readAsText(file);
        });
    }

    parseCSV(text) {
        const lines = text.split('\\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        return lines.slice(1).map(line => {
            const values = line.split(',');
            const row = {};
            
            headers.forEach((header, index) => {
                const value = values[index]?.trim();
                if (value && !isNaN(value)) {
                    row[header] = parseFloat(value);
                }
            });
            
            return row;
        }).filter(row => Object.keys(row).length > 0);
    }

    loadSampleData() {
        // Load some sample predictions for demonstration
        const samplePredictions = [
            { logS: -2.12, category: 'Medium Solubility', model: 'random_forest', timestamp: new Date(Date.now() - 300000) },
            { logS: -3.45, category: 'Low Solubility', model: 'svm', timestamp: new Date(Date.now() - 600000) },
            { logS: -1.89, category: 'Medium Solubility', model: 'linear_regression', timestamp: new Date(Date.now() - 900000) }
        ];
        
        samplePredictions.forEach(pred => {
            this.predictionHistory.push(pred);
        });
        
        this.predictionCount = samplePredictions.length;
        this.updatePredictionHistoryDisplay();
        this.updateStats();
    }

    setupRealTimeUpdates() {
        // Simulate real-time updates every 30 seconds when in real-time mode
        setInterval(() => {
            if (this.isRealTimeMode && this.validateInputs()) {
                // Add subtle visual feedback for real-time processing
                const indicator = document.querySelector('.real-time-indicator');
                if (indicator) {
                    indicator.style.animation = 'pulse 0.5s';
                    setTimeout(() => {
                        indicator.style.animation = '';
                    }, 500);
                }
            }
        }, 30000);
    }

    updateModelInfo() {
        const modelAccuracies = {
            'random_forest': 85.7,
            'linear_regression': 78.3,
            'svm': 82.1,
            'decision_tree': 79.8,
            'knn': 81.5
        };
        
        // Update displayed accuracy if in results view
        const accuracyElement = document.getElementById('modelAccuracy');
        if (accuracyElement && this.predictionHistory.length > 0) {
            accuracyElement.textContent = modelAccuracies[this.currentModel] + '%';
        }
    }

    showMessage(message, type) {
        // Create and show notification message
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // Insert at top of current tab
        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            activeTab.insertBefore(messageDiv, activeTab.firstChild);
            
            // Auto remove after 3 seconds
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 3000);
        }
    }

    // Utility classes
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash;
    }
}

// Random number generator with seed
class Random {
    constructor(seed) {
        this.seed = seed;
    }
    
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    
    nextFloat(min, max) {
        return min + (max - min) * this.next();
    }
    
    nextInt(min, max) {
        return Math.floor(this.nextFloat(min, max + 1));
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SoluPredAI();
});