Copy the complete content below and paste it into a file named `README.md` in your SoluPred AI GitHub repository.

# **SoluPred AI – Real-Time ML Solubility Prediction Platform**

**Predict. Compare. Understand.**

SoluPred AI is a web-based machine learning platform designed for molecular solubility prediction. It combines molecular input, machine-learning model options, batch processing, interactive visualizations and prediction history in one interface.

The platform aims to make molecular solubility analysis easier by allowing users to enter molecular descriptors, provide SMILES strings, upload CSV files and compare model-performance information.

## **📌 Project Overview**

| Project Detail | Description                                               |
| -------------- | --------------------------------------------------------- |
| Project Name   | SoluPred AI                                               |
| Domain         | Machine Learning / Computational Chemistry                |
| Main Objective | Molecular Solubility Prediction                           |
| Input Methods  | Manual Features, SMILES, CSV                              |
| ML Models      | Random Forest, Linear Regression, SVM, Decision Tree, KNN |
| Frontend       | HTML, CSS, JavaScript                                     |
| Visualization  | Chart.js                                                  |
| Styling        | Tailwind CSS                                              |
| Data Format    | JSON, CSV                                                 |

## **🎯 Problem Statement**

Molecular solubility is an important property in computational chemistry and pharmaceutical research.

Traditional solubility analysis may require experimental testing and computational methods. Comparing different prediction models and understanding their results can also be time-consuming.

SoluPred AI aims to provide a single platform where users can enter molecular information, explore solubility predictions and compare available machine-learning models.

## **💡 Proposed Solution**

SoluPred AI provides an interactive prediction platform with:

- Multiple machine-learning model options.
- Manual molecular feature input.
- SMILES-based molecular input.
- CSV batch processing.
- Interactive performance charts.
- Prediction history.
- Model comparison and analysis.

## **⚙️ System Architecture**

The general application workflow is illustrated below.

\#chatgpt-mermaid-\_r_10q\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_10q\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_10q\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_10q\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_10q\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_10q\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_10q\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_10q\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_10q\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_10q\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10q\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10q\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_10q\_ p{margin:0;}#chatgpt-mermaid-\_r_10q\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_10q\_ .label text,#chatgpt-mermaid-\_r_10q\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .node rect,#chatgpt-mermaid-\_r_10q\_ .node circle,#chatgpt-mermaid-\_r_10q\_ .node ellipse,#chatgpt-mermaid-\_r_10q\_ .node polygon,#chatgpt-mermaid-\_r_10q\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .rough-node .label text,#chatgpt-mermaid-\_r_10q\_ .node .label text,#chatgpt-mermaid-\_r_10q\_ .image-shape .label,#chatgpt-mermaid-\_r_10q\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_10q\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .rough-node .label,#chatgpt-mermaid-\_r_10q\_ .node .label,#chatgpt-mermaid-\_r_10q\_ .image-shape .label,#chatgpt-mermaid-\_r_10q\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_10q\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_10q\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10q\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10q\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_10q\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_10q\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10q\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10q\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_10q\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_10q\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_10q\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_10q\_ .icon-shape,#chatgpt-mermaid-\_r_10q\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_10q\_ .icon-shape p,#chatgpt-mermaid-\_r_10q\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_10q\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_10q\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_10q\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_10q\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_10q\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_10q\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_10q\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_10q\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_10q\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10q\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_10q\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_10q\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_10q\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_10q\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_10q\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_10q\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .node rect,#chatgpt-mermaid-\_r_10q\_ .node circle,#chatgpt-mermaid-\_r_10q\_ .node ellipse,#chatgpt-mermaid-\_r_10q\_ .node polygon,#chatgpt-mermaid-\_r_10q\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_10q\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_10q\_ .mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_10q\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_10q\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_10q\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}SoluPred AI Web ApplicationSelect Input MethodManual Feature InputSMILES InputCSV File UploadInput ValidationCSV Validation and ProcessingSelect ML ModelRandom ForestLinear RegressionSVMDecision TreeKNNPrediction ProcessingPredicted Solubility (LogS)Charts and VisualizationsPrediction HistoryDashboard and ML Analysis

### **How the System Works**

1. The user opens the SoluPred AI platform.
2. The user selects manual input, SMILES or CSV upload.
3. The application validates the entered information.
4. The user selects an available ML model.
5. The application processes the input.
6. The predicted LogS value is displayed.
7. Charts and model information help users understand the results.
8. Prediction records can be stored for future review.

## **🚀 Currently Completed Features**

### **1. Core Functionality**

- Real-time solubility prediction interface.
- Multiple machine-learning model options.
- Manual molecular feature input.
- SMILES string input.
- CSV upload for batch processing.
- Interactive dashboard.
- Prediction history.
- Model-performance analysis.

### **2. Data Visualization**

- Real-time prediction charts.
- Model-performance comparison.
- Solubility distribution pie charts.
- Feature-importance visualization.
- Actual vs. predicted scatter plots.
- Radar charts for model comparison.
- Prediction timeline.

### **3. Technical Features**

- Responsive design.
- Mobile-friendly interface.
- Modern user interface.
- Tailwind CSS styling.
- Chart.js integration.
- Drag-and-drop CSV upload.
- Input validation.
- REST API integration for data storage, where configured.
- Local storage for client-side data.

## **🧪 Prediction Input Parameters**

### **Manual Input**

| Parameter          | Description               | Example |
| ------------------ | ------------------------- | ------- |
| MolLogP            | Molecular lipophilicity   | 2.34    |
| MolWt              | Molecular weight          | 180.16  |
| NumRotatableBonds  | Number of rotatable bonds | 3       |
| AromaticProportion | Aromatic proportion       | 0.5     |

### **SMILES Input**

SMILES stands for Simplified Molecular Input Line Entry System. It represents chemical structures using text.

Example:

```
CC(=O)OC1=CC=CC=C1C(=O)O
```

## **🤖 Machine Learning Models**

SoluPred AI provides five model options.

| Model                  | Description                       | Reported Score |
| ---------------------- | --------------------------------- | -------------- |
| Random Forest          | Ensemble learning algorithm       | 85.7%          |
| Linear Regression      | Linear prediction model           | 78.3%          |
| Support Vector Machine | Pattern detection model           | 82.1%          |
| Decision Tree          | Tree-based prediction model       | 79.8%          |
| K-Nearest Neighbors    | Similarity-based prediction model | 81.5%          |

**Note:** These percentages are taken from the supplied project description. They should not be presented as verified accuracy results without documenting the dataset, evaluation metric and testing method. For a regression task such as solubility prediction, R², MAE and RMSE are useful evaluation metrics.

## **📊 Dashboard and Visualizations**

The dashboard provides different views to help users understand predictions and model performance.

| Visualization       | Purpose                                      |
| ------------------- | -------------------------------------------- |
| Prediction Charts   | Display prediction results                   |
| Bar Charts          | Compare model performance                    |
| Pie Charts          | Show solubility categories                   |
| Feature Importance  | Display influential features where supported |
| Scatter Plots       | Compare actual and predicted values          |
| Radar Charts        | Compare multiple model metrics               |
| Prediction Timeline | Track prediction records                     |

### **Analysis Workflow**

\#chatgpt-mermaid-\_r_115\_{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;fill:rgb(13, 13, 13);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-\_r_115\_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_115\_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-\_r_115\_ .error-icon{fill:rgb(243, 243, 243);}#chatgpt-mermaid-\_r_115\_ .error-text{fill:rgb(13, 13, 13);stroke:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-\_r_115\_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-\_r_115\_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-\_r_115\_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-\_r_115\_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-\_r_115\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_115\_ .marker.cross{stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_115\_ svg{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:16px;}#chatgpt-mermaid-\_r_115\_ p{margin:0;}#chatgpt-mermaid-\_r_115\_ .label{font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .cluster-label text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .cluster-label span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-\_r_115\_ .label text,#chatgpt-mermaid-\_r_115\_ span{fill:rgb(13, 13, 13);color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .node rect,#chatgpt-mermaid-\_r_115\_ .node circle,#chatgpt-mermaid-\_r_115\_ .node ellipse,#chatgpt-mermaid-\_r_115\_ .node polygon,#chatgpt-mermaid-\_r_115\_ .node path{fill:rgb(222, 234, 251);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .rough-node .label text,#chatgpt-mermaid-\_r_115\_ .node .label text,#chatgpt-mermaid-\_r_115\_ .image-shape .label,#chatgpt-mermaid-\_r_115\_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-\_r_115\_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .rough-node .label,#chatgpt-mermaid-\_r_115\_ .node .label,#chatgpt-mermaid-\_r_115\_ .image-shape .label,#chatgpt-mermaid-\_r_115\_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-\_r_115\_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-\_r_115\_ .root .anchor path{fill:rgb(143, 143, 143)!important;stroke-width:0;stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_115\_ .arrowheadPath{fill:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_115\_ .edgePath .path{stroke:rgb(143, 143, 143);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .flowchart-link{stroke:rgb(143, 143, 143);fill:none;}#chatgpt-mermaid-\_r_115\_ .edgeLabel{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_115\_ .edgeLabel p{background-color:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_115\_ .edgeLabel rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_115\_ .labelBkg{background-color:rgba(252, 252, 252, 0.5);}#chatgpt-mermaid-\_r_115\_ .cluster rect{fill:rgb(243, 243, 243);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .cluster text{fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ .cluster span{color:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";font-size:12px;background:rgb(243, 243, 243);border:1px solid rgba(0, 0, 0, 0.1);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-\_r_115\_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(13, 13, 13);}#chatgpt-mermaid-\_r_115\_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-\_r_115\_ .icon-shape,#chatgpt-mermaid-\_r_115\_ .image-shape{background-color:rgb(252, 252, 252);text-align:center;}#chatgpt-mermaid-\_r_115\_ .icon-shape p,#chatgpt-mermaid-\_r_115\_ .image-shape p{background-color:rgb(252, 252, 252);padding:2px;}#chatgpt-mermaid-\_r_115\_ .icon-shape .label rect,#chatgpt-mermaid-\_r_115\_ .image-shape .label rect{opacity:0.5;background-color:rgb(252, 252, 252);fill:rgb(252, 252, 252);}#chatgpt-mermaid-\_r_115\_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-\_r_115\_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-\_r_115\_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node rect,#chatgpt-mermaid-\_r_115\_ [data-look="neo"].cluster rect,#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-\_r_115\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-\_r_115\_-gradient);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-\_r_115\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-\_r_115\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_115\_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-\_r_115\_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-\_r_115\_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_115\_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-\_r_115\_ .node tspan[font-weight="normal"],#chatgpt-mermaid-\_r_115\_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-\_r_115\_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .node rect,#chatgpt-mermaid-\_r_115\_ .node circle,#chatgpt-mermaid-\_r_115\_ .node ellipse,#chatgpt-mermaid-\_r_115\_ .node polygon,#chatgpt-mermaid-\_r_115\_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-\_r_115\_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-\_r_115\_ .mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-\_r_115\_ .edgePaths .flowchart-link{stroke:rgb(143, 143, 143);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-\_r_115\_ .marker{fill:rgb(143, 143, 143);stroke:rgb(143, 143, 143);}#chatgpt-mermaid-\_r_115\_ :root{--mermaid-font-family:-apple-system-body,ui-sans-serif,-apple-system,system-ui,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol";}Prediction ResultsSolubility DistributionPrediction HistoryModel EvaluationPerformance MetricsModel ComparisonScatter PlotFeature Importance

## **🌐 Application Navigation**

Main application entry point:

```
/  →  index.html
```

### **Navigation Tabs**

| Tab               | Function                            |
| ----------------- | ----------------------------------- |
| Dashboard         | Statistics and performance overview |
| Real-Time Predict | Molecular input and prediction      |
| Upload Data       | CSV upload and batch processing     |
| ML Analysis       | Model performance and comparison    |

## **🛠 Technology Stack**

### **Frontend Technologies**

| Technology      | Purpose                   |
| --------------- | ------------------------- |
| HTML5           | Web page structure        |
| CSS3            | Styling                   |
| JavaScript ES6+ | Application functionality |
| Chart.js        | Data visualization        |
| Tailwind CSS    | Responsive design         |
| Font Awesome    | Icons                     |

### **Data and API**

| Technology        | Purpose                    |
| ----------------- | -------------------------- |
| RESTful Table API | Data storage and retrieval |
| JSON              | Data exchange              |
| CSV               | Batch processing           |
| Local Storage     | Client-side data caching   |

### **Machine Learning Layer**

The supplied project description identifies:

- Algorithm simulation.
- Feature-importance calculation.
- Statistical analysis.
- Prediction confidence display.

**Important:** Confirm whether the current implementation uses trained ML models or simulated algorithm behaviour. Clearly label demonstration outputs if they are simulated.

## **🗄️ Data Models and Storage**

### **1. Prediction History Table**

Table name:

```
prediction_history
```

Stores information such as:

- Predicted LogS value.
- Solubility category.
- Confidence value, if calculated.
- Input molecular features.
- Input method.
- Model information.
- Timestamp.

### **2. Model Performance Table**

Table name:

```
model_performance
```

Stores information such as:

- Model name.
- Performance scores.
- R² values.
- Training and testing metrics.
- Sample counts.
- Last updated timestamp.

## **🔗 API Endpoints**

The project description lists the following API endpoints.

| Method | Endpoint                     | Purpose                     |
| ------ | ---------------------------- | --------------------------- |
| GET    | `/tables/prediction_history` | Retrieve prediction history |
| POST   | `/tables/prediction_history` | Save prediction records     |
| GET    | `/tables/model_performance`  | Retrieve model performance  |

General API route:

```
/tables/{table_name}
```

Confirm these endpoints are available in your current deployment before publishing them as working APIs.

## **📖 How to Use SoluPred AI**

### **Real-Time Prediction**

1. Open the Real-Time Predict tab.
2. Select a machine-learning model.
3. Choose Manual Input or SMILES.
4. Enter the required molecular information.
5. View the predicted solubility value.
6. Review the available charts and results.

### **Batch Processing**

1. Prepare a CSV file using the required column names.
2. Open the Upload Data tab.
3. Upload the CSV file.
4. Review the processed predictions.
5. Export results if the export feature is available.

### **Model Comparison**

1. Open the ML Analysis tab.
2. View the available model-performance metrics.
3. Compare the different models.
4. Review scatter plots and radar charts.
5. Analyse feature-importance information where available.

## **❌ Features Not Yet Implemented**

The following features are planned for future development.

### **Advanced Machine Learning**

- Model retraining.
- Cross-validation.
- Hyperparameter tuning.
- Advanced ensemble methods.
- Automated feature selection.

### **Enhanced Analytics**

- Prediction confidence intervals.
- SHAP integration.
- LIME explainability.
- Statistical significance testing.
- Model drift monitoring.

### **Data Management**

- SDF and MOL file support.
- Automated molecular feature extraction.
- RDKit integration.
- Data-quality assessment.
- Multiple-format result export.
- Dataset and model versioning.

### **User Experience**

- User authentication.
- Project management.
- Collaboration tools.
- Complete API documentation.
- Native mobile application.

## **🔮 Future Development Roadmap**

### **Phase 1 – Enhanced Analytics**

1. Implement SHAP integration.
2. Add 3D molecular structure visualization.
3. Add statistically supported confidence intervals.
4. Improve model comparison tools.

### **Phase 2 – Data Pipeline Enhancement**

1. Add SDF and MOL file support.
2. Integrate RDKit for SMILES processing.
3. Implement automated data-quality checks.
4. Add result export functionality.

### **Phase 3 – Production Features**

1. Implement user authentication.
2. Add API rate limiting.
3. Introduce model versioning.
4. Add system-performance monitoring.

### **Phase 4 – Advanced Machine Learning**

1. Explore deep-learning models.
2. Investigate transfer learning.
3. Implement active learning.
4. Explore multi-task learning.

## **📁 Suggested Project Structure**

Adapt this structure to match the actual folders in your project.

```
SoluPred-AI/
│
├── README.md
├── LICENSE
├── .gitignore
├── .env.example
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│
├── data/
│   └── README.md
│
├── models/
│   └── README.md
│
├── docs/
│
└── screenshots/
```

## **🎨 Design Philosophy**

SoluPred AI follows a clean and professional design approach suitable for computational chemistry and pharmaceutical research.

The interface focuses on:

- **Immediate Feedback:** Easy access to prediction results.
- **Data Transparency:** Clear presentation of model information.
- **Scientific Understanding:** Visual comparison of model results.
- **User Experience:** Simple navigation and responsive design.
- **Scalability:** A foundation for future ML and data-processing improvements.

## **⚠️ Responsible Use and Limitations**

SoluPred AI is intended as a computational research and learning aid.

- Predicted values are estimates, not experimental measurements.
- Model performance depends on the quality of training data.
- Predictions may be less reliable for molecules outside the training domain.
- Experimental validation and scientific literature should be consulted before making research or pharmaceutical decisions.
- Simulated results must be clearly identified.
- Dataset sources and model evaluation methods should be documented.

## **👥 Project Information**

**Project Name:** SoluPred AI – Real-Time ML Solubility Prediction Platform

**Domain:** Machine Learning and Computational Chemistry

**Purpose:** Molecular Solubility Prediction

**Developed Using:** HTML, CSS, JavaScript and the listed ML technologies.

**Team Members:** Add your team details here.

**Institution:** Add your institution name here.

