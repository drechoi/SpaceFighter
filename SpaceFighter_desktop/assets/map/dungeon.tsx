<?xml version="1.0" encoding="UTF-8"?>
<tileset name="dungeon" tilewidth="32" tileheight="32">
 <image source="maptile02.png" width="320" height="160"/>
 <terraintypes>
  <terrain name="Wall" tile="-1"/>
  <terrain name="Ground" tile="-1"/>
 </terraintypes>
 <tile id="0" terrain="0,0,0,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="1" terrain="0,0,1,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="2" terrain="0,0,1,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="3">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="4">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="5">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="6" terrain="1,1,1,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="7" terrain="1,1,0,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="10" terrain="0,1,0,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="11" terrain="1,1,1,1">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="true"/>
  </properties>
 </tile>
 <tile id="12" terrain="1,0,1,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
  <objectgroup draworder="index"/>
 </tile>
 <tile id="13">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="14" terrain="0,0,0,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="15">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="16" terrain="1,0,1,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="17" terrain="0,1,1,1">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="20" terrain="0,1,0,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="21" terrain="1,1,0,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
  <objectgroup draworder="index">
   <object id="0" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="22" terrain="1,0,0,0">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="23">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="24">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="25">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="26">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="27">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="30" terrain="1,1,1,1">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="true"/>
  </properties>
  <objectgroup draworder="index"/>
 </tile>
 <tile id="31">
  <properties>
   <property name="TileType" value="9"/>
   <property name="Walkable" value="true"/>
  </properties>
 </tile>
 <tile id="32">
  <properties>
   <property name="TileType" value="8"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="33" terrain="0,0,1,1" probability="0.5">
  <properties>
   <property name="TileType" value="1"/>
   <property name="Walkable" value="false"/>
  </properties>
  <objectgroup draworder="index">
   <object id="0" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="34">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="35">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="36">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="37">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="40">
  <properties>
   <property name="TileType" value="3"/>
   <property name="Walkable" value="true"/>
  </properties>
  <animation>
   <frame tileid="40" duration="500"/>
   <frame tileid="42" duration="50"/>
   <frame tileid="41" duration="500"/>
   <frame tileid="42" duration="50"/>
  </animation>
 </tile>
 <tile id="41">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="42">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="43" probability="0.5">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="44">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="45">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="46">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
 <tile id="47">
  <properties>
   <property name="TileType" value="0"/>
   <property name="Walkable" value="false"/>
  </properties>
 </tile>
</tileset>
