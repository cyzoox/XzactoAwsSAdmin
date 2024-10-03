import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import themes from '../styles/themes';

const ColorPicker = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
      {Object.keys(themes).map((themeKey) => (
        <TouchableOpacity
          key={themeKey}
          onPress={() => toggleTheme(themeKey)}
          style={{
            backgroundColor: themes[themeKey].background,
            borderRadius: 20,
            padding: 10,
            margin: 5,
          }}
        >
          <Text style={{ color: themes[themeKey].text }}>{themeKey}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ColorPicker;
