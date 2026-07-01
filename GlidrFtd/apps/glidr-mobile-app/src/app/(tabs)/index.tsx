import { CategoriesSection, HomeHeader, SearchBar } from "@/components/home";
// import { BottomNavigation } from "@/components/navigation";
import { SafeAreaView } from "react-native-safe-area-context";


import { user } from "@/mock/user";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <HomeHeader
                userName={user.firstName}
                storeName={user.currentStore}
            />
            <SearchBar />
            <CategoriesSection />
            {/* <BottomNavigation /> */}
        </SafeAreaView>
    );
}