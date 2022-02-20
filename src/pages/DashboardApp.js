// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { Events, TotalMembers, Projects, Workshops } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Admin | Meta Morph">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Projects />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Events />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Workshops />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalMembers />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
