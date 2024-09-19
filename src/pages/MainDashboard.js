import React from 'react';
import Card from '../components/Card/Card.component';
import CardContentSmall from '../components/CardContent/CardContentSmall';
import CardContentLong from '../components/CardContent/CardContentLong';
import CardContentMedium from '../components/CardContent/CardContentMedium';
import CardContentUpdates from '../components/CardContent/CardContentUpdates';
import SubSectionTicket from '../components/SubSectionTicket/SubSectionTicket.component';
import SupportCard from '../components/CardContent/CardContentSupport';
import ProgressBar from '../components/ProgressBar/ProgressBar.component';
import TicketsList from '../components/TicketsList/TicketsList.component';
import './pages.css';
import { chartDataDown, chartDataUp, chartDataSlightUp, chartOptionsNoLabels, chartDataDonut, chartOptionsDonut, chartDataBar, chartOptionsBar } from '../config/chart.config';
import { notifications } from '../config/notification.config';

const MainDashboard = () => {
  return (
    <div className="main-dashboard-container">
      <div className="main-dashboard">
        
      
        <div className="main-section">
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-bar-chart-alt-2"
              topText="Total Sales"
              bottomText="Rs.xxx.xx"
              chartData={chartDataDown}
              chartOptions={chartOptionsNoLabels}
              textSection="<span style='color: red;'>-10% </span> from last week"
              chartType="line" 
            />
          </Card>
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-user"
              topText="Total Customers"
              bottomText="xxxx"
              chartData={chartDataUp}
              chartOptions={chartOptionsNoLabels}
              textSection="<span style='color: green;'>+10% </span> increase from the last week"
              chartType="line" 
            />
          </Card>
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-cart"
              topText="Total Orders"
              bottomText="xxxx"
              chartData={chartDataSlightUp}
              chartOptions={chartOptionsNoLabels}
              textSection="<span style='color: yellow;'>+5%</span> increase from the last week"
              chartType="line" 
            />
          </Card>

          <Card cardType="long">
            <CardContentLong
              headerText="Total Orders"
              centerText='Total Orders'
              centerNumber='xx,xxxx'
              chartData={chartDataDonut}
              chartOptions={chartOptionsDonut}
              activeOrders="xx,xx,xxxx"
              completedOrders="xx,xx,xxxx"
            />
          </Card>

          <Card cardType="medium">
            <CardContentMedium
              headerText="Service Metrics"
              chartData={chartDataBar}
              chartOptions={chartOptionsBar}
            />
          </Card>
          <Card cardType="updates">
            <CardContentUpdates
              headerText="Recent Updates"
              notifications={notifications}
            />
          </Card>
        </div>
        <div className="sub-section">
          <SubSectionTicket
            icon="bxs-message-rounded-error"
            topText="Total tickets"
            bottomText="XXXX"
          />
          <ProgressBar percentage={75} />

          <TicketsList title="Pending Tickets (03)" />



          <SupportCard
            userIcon="bx-user"
            userId="12345"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="System Outage"
            description="The system is experiencing a critical outage affecting all users. Immediate attention required."
            status="In Progress"
          />
          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="Overcharged on Recent Invoice"
            description="The recent invoice shows an overcharge. Requesting a detailed breakdown and correction of the billing error."
            status="Open"
          />
          <SupportCard
            userIcon="bx-user"
            userId="54321"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="Account Locked Due to Suspicious Activity"
            description="The account has been locked due to suspected suspicious activity. Awaiting further verification to restore access."
            status="On Hold"
          />

        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
