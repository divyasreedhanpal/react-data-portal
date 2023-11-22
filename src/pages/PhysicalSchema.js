import { Grid, Typography } from "@mui/material";
import PhysicalSchemaImg from "../assets/PhysicalSchemaImg.png";
import "./PhysicalSchema.css"
import SearchBar from "../components/SearchBar";
import CustomTabs from "../components/CustomTabs";
import SubHeader from "../components/SubHeader";
import PhysicalSchemaCard from "../components/PhysicalSchemaCard";
import FilterTab from "../components/FilterTab";

export default function PhysicalSchema() {
    const tabsData= ["Dashboard", "Add new UseCase"];
    return (
        <>
            <SubHeader></SubHeader>
            <Grid container spacing={2} sx={{
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={12} md={12} sx={{
                    backgroundColor: '#ffffffb5',
                    borderRadius: '5px',
                }}>
                    <CustomTabs data={tabsData}></CustomTabs>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                backgroundColor: '#ffffffb5',
                borderRadius: 3,
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={6} md={6}>
                    <div className="css1">
                        <Typography variant="h2" sx={{
                            width: '100%',
                            color: 'red',
                            fontWeight: 300,
                            fontSize: '1.75rem',
                        }}>
                            Welcome to Phyiscal Schema
                        </Typography>
                    </div>
                    <div className="css2">
                        <Typography variant="h6" className="cssFont2">
                            testdata featues
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                    <img src={PhysicalSchemaImg} className="imgCss1" alt="dashboard"></img>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{
                marginTop: 0.5,
                marginLeft: 8,
                width: '90%',
            }}>
                <Grid item xs={12} lg={6} md={4}>
                    <SearchBar></SearchBar>
                </Grid>
                <Grid item xs={12} lg={6} md={8}>
                   <FilterTab></FilterTab>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{
                marginTop: 1,
                marginLeft: 8,
                width: '90%',
            }}>
                 <Grid item xs={12} lg={3} md={3} sx={{
                    borderRadius: '5px',
                }}>
                    <PhysicalSchemaCard></PhysicalSchemaCard>
                </Grid>
                <Grid item xs={12} lg={3} md={3} sx={{
                    borderRadius: '5px',
                }}>
                    <PhysicalSchemaCard></PhysicalSchemaCard>
                </Grid>
                <Grid item xs={12} lg={3} md={3} sx={{
                    borderRadius: '5px',
                }}>
                    <PhysicalSchemaCard></PhysicalSchemaCard>
                </Grid>
            </Grid>
        </>

    );
}