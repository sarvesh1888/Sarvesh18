<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>BMI Calculator</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #83a4d4, #b6fbff);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background: white;
      padding: 40px 30px;
      border-radius: 15px;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 350px;
      text-align: center;
    }

    h2 {
      margin-bottom: 20px;
      color: #333;
    }

    input {
      padding: 12px;
      margin: 10px 0;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 16px;
    }

    button {
      padding: 12px;
      width: 100%;
      background-color: #007bff;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #0056b3;
    }

    .result {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .note {
      font-size: 12px;
      color: #777;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>BMI Calculator</h2>
    <input type="number" id="weight" placeholder="Weight in kg" />
    <input type="number" id="height" placeholder="Height in feet" />
    <button onclick="calculateBMI()">Calculate BMI</button>
    <div class="result" id="result"></div>
    <div class="note">* Height is in feet (e.g., 5.8)</div>
  </div>

  <script>
    function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const heightFeet = parseFloat(document.getElementById("height").value);
      const result = document.getElementById("result");

      if (!weight || !heightFeet || weight <= 0 || heightFeet <= 0) {
        result.textContent = "Please enter valid weight and height.";
        return;
      }

      // Convert height from feet to meters
      const heightMeters = heightFeet * 0.3048;

      const bmi = weight / (heightMeters * heightMeters);
      let category = "";

      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }

      result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    }
  </script>
</body>
</html>
