import { Image, Pressable, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React from "react";
import { colors, gStyles, theme } from "@theme";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { images } from "@assets";

export const HomeMain = () => {
  const [activeSubSection, setActiveSubSection] = React.useState<
    "quran" | "hadith" | "day" | "alphabets" | "dua"
  >("quran");
  return (
    <View style={styles.main}>
      <View
        style={{
          paddingHorizontal: theme.spacing.xl,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          backgroundColor: "#FFEAB3",
          width: "100%",
          minHeight: 200,
          paddingBottom: theme.spacing.xxxl * 3,
        }}
      >
        <View style={{ rowGap: theme.spacing.sm, alignItems: "flex-start" }}>
          <Text style={[gStyles.descText, { color: colors.black }]}>Now</Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: theme.font.bold,
              fontSize: theme.fontSize.xl,
            }}
          >
            Isha
          </Text>
          <Text style={[gStyles.descText, { color: colors.black }]}>Upcoming</Text>
          <Text
            style={{
              color: colors.black,
              fontFamily: theme.font.bold,
              fontSize: theme.fontSize.lg,
            }}
          >
            Fajr
          </Text>
          <Text style={[gStyles.descText, { color: colors.black }]}>5:03 AM</Text>
        </View>
        <View />
        <View style={{ rowGap: theme.spacing.sm, alignItems: "flex-end" }}>
          <Text
            style={{
              color: colors.black,
              fontFamily: theme.font.bold,
              fontSize: theme.fontSize["2xl"],
            }}
          >
            28
          </Text>
          <Text style={[gStyles.descText, { color: colors.black }]}>Rabi' II, 1446</Text>
          <Text style={[gStyles.descText, { color: colors.black }]}>01 Nov, Fri, 24</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: theme.spacing.xl }}>
        <View style={styles.searchContainer}>
          <Octicons name="search" size={20} color={colors.yellow} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.textGray}
            style={styles.input}
          />
          <Entypo name="mic" size={20} color={colors.yellow} />
        </View>

        <View style={{ marginTop: theme.spacing.xl }} />

        <View style={styles.subSectionIconsContainer}>
          <Pressable onPress={() => setActiveSubSection("quran")}>
            <FontAwesome
              name="book"
              color={activeSubSection === "quran" ? colors.yellow : colors.iconGray}
              size={22}
            />
          </Pressable>
          <Pressable onPress={() => setActiveSubSection("hadith")}>
            <FontAwesome5
              name="book-open"
              color={activeSubSection === "hadith" ? colors.yellow : colors.iconGray}
              size={22}
            />
          </Pressable>
          <Pressable onPress={() => setActiveSubSection("day")}>
            <Ionicons
              name="calendar"
              color={activeSubSection === "day" ? colors.yellow : colors.iconGray}
              size={22}
            />
          </Pressable>
          <Pressable onPress={() => setActiveSubSection("alphabets")}>
            <MaterialCommunityIcons
              name="abjad-arabic"
              color={activeSubSection === "alphabets" ? colors.yellow : colors.iconGray}
              size={24}
            />
          </Pressable>
          <Pressable onPress={() => setActiveSubSection("dua")}>
            <MaterialCommunityIcons
              name="hands-pray"
              color={activeSubSection === "dua" ? colors.yellow : colors.iconGray}
              size={24}
            />
          </Pressable>
        </View>

        <View style={{ marginTop: theme.spacing.xl }} />

        <FlatList
          columnWrapperStyle={{ columnGap: theme.spacing.md }}
          numColumns={2}
          data={["القرآن", "حمد و نعت", "ارکانِ اسلام", "فقہ"]}
          renderItem={({ item }) => <Card title={item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const Card = ({ title }: { title: string }) => {
  return (
    <View style={[styles.card]}>
      <Image
        source={images["top-left"]}
        style={{
          display: "flex",
          position: "absolute",
          width: 40,
          height: 40,
          top: theme.spacing.md,
          left: theme.spacing.md,
          tintColor: colors.iconGray,
        }}
        resizeMode="contain"
      />
      <Image
        source={images["top-right"]}
        style={{
          display: "flex",
          position: "absolute",
          width: 40,
          height: 40,
          top: theme.spacing.md,
          right: theme.spacing.md,
          tintColor: colors.iconGray,
        }}
        resizeMode="contain"
      />
      <Text style={styles.cardTitleText}>{title}</Text>
      <Image
        source={images["bottom-right"]}
        style={{
          display: "flex",
          position: "absolute",
          width: 40,
          height: 40,
          bottom: theme.spacing.md,
          right: theme.spacing.md,
          tintColor: colors.iconGray,
        }}
        resizeMode="contain"
      />
      <Image
        source={images["bottom-left"]}
        style={{
          display: "flex",
          position: "absolute",
          width: 40,
          height: 40,
          bottom: theme.spacing.md,
          left: theme.spacing.md,
          tintColor: colors.iconGray,
        }}
        resizeMode="contain"
      />
    </View>
  );
};
export default HomeMain;

const styles = StyleSheet.create({
  main: {
    ...gStyles.mainContainer,
    backgroundColor: "#F6F9FE",
    paddingHorizontal: 0,
    // borderWidth: 1,
  },
  searchContainer: {
    marginTop: -theme.spacing.xxxl,
    columnGap: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: theme.radius.xl,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    marginHorizontal: theme.spacing.xl,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: theme.radius.xs - 2,
    elevation: 4, // for Android shadow
  },
  input: {
    flex: 1,
    fontSize: theme.fontSize.lg,
    color: colors.black,
  },
  subSectionIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
    //   borderWidth: 1,
  },
  card: {
    ...gStyles.card,
    flex: 1,
    justifyContent: "center",
    minWidth: 128,
    minHeight: 128,
  },
  cardTitleText: {
    ...gStyles.cardTitleText,
    fontSize: theme.fontSize.xl,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
