

import React from 'react';
import Card from '../components/Card/Card.component';
import CardContentSmall from '../components/CardContent/CardContentSmall';
import CardContentRating from '../components/CardContent/CardContentRating';
import CardContentWide from '../components/CardContent/CardContentWide';
import { chartDataDown, chartDataUp, chartDataSlightUp, chartOptionsNoLabels, chartDataPie, chartOptionsPie, chartDataWide, chartOptionsWide, chartDataCircle, chartOptionsCircle, chartDataServiceOfferingPie, chartOptionsServiceOfferingPie, chartDataServiceOfferingLine, chartOptionsServiceOfferingLine, chartDataServiceProviderDonut, chartOptionsServiceProviderDonut } from '../config/chart.config';
import CardContentMap from '../components/CardContent/CardContentMap';
import CardContentHalf from '../components/CardContent/CardContentHalf';
import CardContentServiceProvider from '../components/CardContent/CardContentServiceProvider';
import CardContentLong from '../components/CardContent/CardContentLong';
import CardContentMedium from '../components/CardContent/CardContentMedium';
import CardContentPercentageDonut from '../components/CardContent/CardContentPercentageDonut'
import CardContentSemiCircle from '../components/CardContent/CardContentSemiCircle';
import SubSectionTicket from '../components/SubSectionTicket/SubSectionTicket.component'
import SupportCard from '../components/CardContent/CardContentSupport';
import ProgressBar from '../components/ProgressBar/ProgressBar.component';
import TicketsList from '../components/TicketsList/TicketsList.component'
import ConstructionSector from '../asset/ConstructionSector.jpg'
import HealthCareSector from '../asset/HealthCareSector.jpg'
import HomeCareSector from '../asset/HomeServicesSector.jpg'
import PetCareSector from '../asset/PetCareSector.jpg'
const ServiceProvider = () => {
  return (
    <div className="main-dashboard-container">
      <div className="main-dashboard">

        <div className="main-section">
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-bar-chart-alt-2"
              topText="Total Service Provider"
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
              topText="New Service Provider"
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
              topText="Active Service Provider"
              bottomText="xxxx"
              chartData={chartDataSlightUp}
              chartOptions={chartOptionsNoLabels}
              textSection="<span style='color: yellow;'>+5%</span> increase from the last week"
              chartType="line"
            />
          </Card>
          <Card cardType="small">
            <CardContentRating
              icon="bx-star"
              topText="Average Rating"
              bottomText="5 Stars"
              userName="John Doe"
              userRating={4}
              viewAllText="View All"
              timeAgoText="1 day ago"
            />
          </Card>
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-pie-chart-alt-2"
              bottomText="Service Completion Rate"
              chartData={chartDataPie}
              chartOptions={chartOptionsPie}
              textSection="85% Completed "
              chartType="pie"
            />
          </Card>
          <Card cardType="small">
            <CardContentSmall
              icon="bxs-user"
              topText="Service Provider"
              bottomText="Retension Rate"
              chartData={chartDataUp}
              chartOptions={chartOptionsNoLabels}
              textSection="<span style='color: green;'>+100% </span> increase from the last week"
              chartType="line"
            />
          </Card>
          <Card cardType="wide">
            <CardContentWide
              headerText="Weekly Performance"
              chartData={chartDataWide}
              chartOptions={chartOptionsWide}
            />
          </Card>
          <Card cardType="half">
            <CardContentHalf
              headerText="Service Distribution"
              chartData={chartDataCircle}
              chartOptions={chartOptionsCircle}
            />
          </Card>
          <Card cardType="half">
            <CardContentMap />
          </Card>
          <Card cardType="wide">
            <CardContentServiceProvider
              imageSrc={ConstructionSector}
              headerText="Construction Sector"
              userCount={200}
              value="+11.02%"
            />
            <CardContentServiceProvider
              imageSrc={HealthCareSector}
              headerText="Health Care Sector"
              userCount={180}
              value="+10.02"
            />
            <CardContentServiceProvider
              imageSrc={HomeCareSector}
              headerText="Home Care Sector"
              userCount={150}
              value="+9%"
            />
            <CardContentServiceProvider
              imageSrc={PetCareSector}
              headerText="Pet Care Sector"
              userCount={100}
              value="+5%"
            />
          </Card>
          <Card cardType="wide">
            <div className='half-card'>
              <CardContentLong
                headerText="Service Offering"
                chartData={chartDataServiceOfferingPie}
                chartOptions={chartOptionsServiceOfferingPie}
                chartType="pie"
              />
              <div className='medium-card'>
                <CardContentMedium
                  chartData={chartDataServiceOfferingLine}
                  chartOptions={chartOptionsServiceOfferingLine}
                  chartType="line"
                />
              </div>
            </div>
          </Card>
          <Card cardType="half">

            <CardContentSemiCircle
              percentages={[88, 70, 55]}
              colors={['rgba(255, 132, 124, 1)', 'rgba(22, 93, 201, 1)', 'rgba(67, 198, 191, 1)']}
              labels={['Active Service Provider', 'Service Provider Retention Rate', 'New Service Provider']}
            />
          </Card>
          <Card cardType="half">
            <CardContentPercentageDonut
              headerText="Service Provider Distribution"
              chartData={chartDataServiceProviderDonut}
              chartOptions={chartOptionsServiceProviderDonut}
            />
          </Card>
        </div>
        <div className="sub-section">
          <SubSectionTicket
            icon="bx-support"
            bottomText="Support & Compliances"
            showButton={false}
          />
          <TicketsList title="Support Tickets" />

          <SupportCard
            userIcon="bx-user"
            userId="12345"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="In Progress"
          />
          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="Open"
          />
          <TicketsList title="Open Tickets" />

          <SupportCard
            userIcon="bx-user"
            userId="12345"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="Open"
          />
          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="Open"
          />
          <TicketsList title="Solved Tickets" />

          <SupportCard
            userIcon="bx-user"
            userId="12345"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="resolved"
          />
          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            subject="I am facing Technical Issue during the Signup process"
            status="resolved"
          />
          <TicketsList title="Compliance Tickets" />

          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            status=""
            haveChildren={true}
          >
            <ProgressBar percentage={75} />
          </SupportCard>
          <SupportCard
            userIcon="bx-user"
            userId="67890"
            userName="John Doe"
            supportType="Technical Error"
            errorType="Healthcare"
            status=""
            haveChildren={true}
          >
            <ProgressBar percentage={75} />
          </SupportCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
