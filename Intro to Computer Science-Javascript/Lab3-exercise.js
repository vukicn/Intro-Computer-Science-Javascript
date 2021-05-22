function getDriversAge() {
	var driversAge=Number(prompt("Enter driver's age?"));
	return driversAge;
}
function driversAgeSurcharge(driversAge){
	if (driversAge >=15 && driversAge <=18)
		return 899.99;
	else if (driversAge >=19 && driversAge <=25) 
		return 699.99;
	else if	(driversAge >=26 && driversAge <=35)
		return 199.99;
	else if (driversAge >=36 && driversAge <=70)
		return 0.00;
	else if (driversAge >=71 && driversAge <=80)
		return 199.99;
	else 
		return 999.99;
}
function getVehicleAge(){
	var vehicleAge=Number(prompt("Enter age of vehcile?"));
	return vehicleAge;
}
function vehicleAgeSurcharge(vehicleAge){
	if (vehicleAge >=0 && vehicleAge <=5)
		return 0.00;
	else if (vehicleAge >=6 && vehicleAge <=10)
		return 125.99;
	else if (vehicleAge >=11 && vehicleAge <=15)
		return 199.99;
	else 
		return 0.00;
	
}
function getVehicleType() {
	var str = "Please enter the vehicle type code: \n" +
			  "  (M) Motorcycle\n" +
			  "  (P) Passenger Vehicle\n" +
			  "  (R) Recreational Vehicle\n" +		
			  "  (S) Sports Car\n" +
			  "  (V) Van\n" +
			  "  (T) Truck\n" +
			  "  (C) Commercial Vehicle\n";

	var vehicleType;
	vehicleType = prompt(str);
	return vehicleType;
}

function getSubType(vehicleType) {
	var str = "Unknown Subtype";
	if (vehicleType == "P") {
		str = "Please enter the vehicle subtype code: \n" + 
			  "  (S) Sedan\n" + 
			  "  (L) Luxury\n";
	}
	else if (vehicleType == "R") {
		str = "Please enter the vehicle subtype code: \n" +
			  "  (M) Motorhome\n" +
			  "  (T) Truck Camper\n";
	}
	else if (vehicleType == "V") {
		str = "Please enter the vehicle subtype code: \n" +
			  "  (M) Mini-Van\n" +
			  "  (P) Passenger Van\n";
	}
	else if (vehicleType == "T") {
		str = "Please enter the vehicle subtype code: \n" +
			  "  (P) Pickup\n" +
			  "  (S) SUV\n";
	}
	else if (vehicleType == "C") {
		str = "Please enter the vehicle subtype code: \n" +
			  "  (S) Semi-Truck\n" + 
			  "  (B) Bus\n" +
			  "  (T) Taxi\n";
	}
	
	var subtype;
	subtype = prompt(str);
	return subtype;
}
function getSubSubType(subtype){
	var result=prompt("Enter the class of the vehicle: \n" +
					  "  (A) Class \n" +
					  "  (B) Class \n" +
					  "  (C) Class \n");
	return result;
}
function printing(drAge, vrAge, vType, vSubtype, vSubSubType, baseInsFee, vSur, dAgeSur, vAgeDis, total){
	document.write("Driver's Age: " + drAge + "</br>");
	document.write("Vehicle Age: " + vrAge + "</br>");
	document.write("Vehicle type: " + vType + "</br>");
	document.write("Vehicle sub type: " + vSubtype + "</br>");
	document.write("Vehicle subsub type: " + vSubSubType + "</br>");
	document.write("Base Insurance Fee: " + baseInsFee + "</br>");
	document.write("Vehicle Surcharge: " + vSur + "</br>");
	document.write("Driver's Age Surcharge: " + dAgeSur + "</br>");
	document.write("Vehicle Age Discount: " + vAgeDis + "</br>");
	document.write("Total Insurance Fee: " + total + "</br>");
}
function insuranceCalculator() {
	var dAge = getDriversAge();
	var vAge = getVehicleAge();
	var type = getVehicleType();
	
	if (type == "M") 
		Motorcycle(dAge, vAge);
	
	else if (type == "P"){
		var subtype=getSubType(type);
		if (subtype == "S")
			Sedan(dAge, vAge);
		else if (subtype == "L")
			Luxury(dAge, vAge);
	}
	else if (type == "R"){
		var subtype12=getSubType(type);
		if (subtype12 == "M"){
			var result=getSubSubType(subtype);
			if (result == "A")
				classA(dAge, vAge);
			else if (result == "B")
				classB(dAge, vAge);
			else if (result == "C")
				classC(dAge, vAge);
		}
		else if (subtype12 == "T")
			truckCamper(dAge, vAge);
	}
	
	else if (type == "S") 
		SportsCar(dAge, vAge);
	
	else if (type == "V") {
		var subtype=getSubType(type);
		if (subtype == "M")
			Minivan(dAge, vAge);
		else if (subtype == "P")
			PassengerVan(dAge, vAge);	
	}
	else if (type == "T"){ 
		var subtype=getSubType(type);
		if (subtype == "P")
			PickupTruck(dAge, vAge);
		else if (subtype == "S")
			Suv(dAge, vAge);
	}
	else if (type == "C") {
		var subtype=getSubType(type);
		if (subtype == "S")
			SemiTruck(dAge, vAge);
		else if (subtype == "B")
			Bus(dAge, vAge);
		else if (subtype == "T")
			Taxi(dAge, vAge);
	}
	else
		document.write("Wrong name!<br>");
}

function Motorcycle (dAge, vAge){
	var baseInsurance=129.99;
	var surcharge=0.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(M) Motorcycle", "","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);	
}
function Luxury (dAge, vAge) {
	var baseInsurance=434.99;
	var surcharge=249.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(P) Passenger Vehicle", "(L) Luxury","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function Sedan (dAge, vAge){
	var baseInsurance=434.99;
	var surcharge=0.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(P) Passenger Vehicle", "(S) Sedan","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);	
}
function classA (dAge, vAge) {
	var baseInsurance=850.00;
	var surcharge=350.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(R) Recreational Vehicle", "(M) Motorhome","(A) Class", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function classB (dAge, vAge) {
	var baseInsurance=850.00;
	var surcharge=300.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(R) Recreational Vehicle", "(M) Motorhome","(B) Class", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function classC (dAge, vAge) {
	var baseInsurance=850.00;
	var surcharge=250.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(R) Recreational Vehicle", "(M) Motorhome","(C) Class", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function truckCamper(dAge, vAge){
	var baseInsurance=850.00;
	var surcharge=100.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(R) Recreational Vehicle", "(T) Truck Camper","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function SportsCar (dAge, vAge){
	var baseInsurance=975.99;
	var surcharge=0.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(S) Sports car", "","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}

function Minivan(dAge, vAge){
	var baseInsurance=509.99;
	var surcharge=0.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(V) Van", "(M) Minivan","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function PassengerVan(dAge, vAge){
	var baseInsurance=509.99;
	var surcharge=74.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(V) Van", "(P) Passenger Van","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function PickupTruck(dAge, vAge){
	var baseInsurance=579.99;
	var surcharge=0.00;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(T) Truck", "(P) Pickup Truck", "", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function Suv(dAge, vAge){
	var baseInsurance=579.99;
	var surcharge=95.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(T) Truck", "(S) Suv","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}

function SemiTruck(dAge, vAge){
	var baseInsurance=1225.99;
	var surcharge=329.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(C) Commercial vehicle", "(S) Semi-Truck","", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function Bus(dAge, vAge){
	var baseInsurance=1225.99;
	var surcharge=59.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(C) Commercial vehicle", "(B) Bus", "", baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
function Taxi(dAge, vAge){
	var baseInsurance=1225.99;
	var surcharge=269.99;
	var dAgeSurcharge=driversAgeSurcharge(dAge);
	var vAgeSurcharge=vehicleAgeSurcharge(vAge);
	var insuranceFee=baseInsurance+surcharge+dAgeSurcharge-vAgeSurcharge;
	printing(dAge, vAge, "(C) Commercial vehicle", "(T) Taxi","",  baseInsurance, surcharge, dAgeSurcharge, vAgeSurcharge, insuranceFee);
}
insuranceCalculator();