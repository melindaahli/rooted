#include <Arduino_RouterBridge.h>
#include <Arduino_Modulino.h>

ModulinoThermo thermo;

int ldrSensorPin = A2;
int waterSensorPin = A5;

void setup() {
  Monitor.begin();

  Modulino.begin(Wire1);
  thermo.begin();

  delay(2000);
}

void loop() {
  int water = analogRead(waterSensorPin);

  int light = analogRead(ldrSensorPin);
  String light_level = "";
  if(light < 300){
      light_level = "Full Sun";
  }
  else if(light < 600){
      light_level = "Partial Sun";
  }
  else if(light < 900){
      light_level = "Indirect Light";
  }
  else{
      light_level = "Low Light";
  }

  float celsius = thermo.getTemperature();
  int fahrenheit = (celsius * 9.0 / 5.0) + 32.0;

  float humidity = thermo.getHumidity();
  int hum_percentage = 100 - int((humidity / 1023) * 100);

  Monitor.print(water);
  Monitor.print(",");
  Monitor.print(fahrenheit);
  Monitor.print(",");
  Monitor.print(hum_percentage);
  Monitor.print(",");
  Monitor.println(light_level);

  delay(250);
}