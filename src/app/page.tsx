import BarChart from "@/Components/Barchart";
import Card, { CardContent, CardProps } from "@/Components/Card";
import PageTitle from "@/Components/PageTitle";
import SalesCard, { SalesProps } from "@/Components/salesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "$2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",   
    amount: "$12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "$573",
    description: "+201% since last hour",
    icon: Activity
  },
]

const userSaleData: SalesProps[] = [
  {
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "saleAmount": "+$150.25"
  },
  {
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "saleAmount": "+$200.75"
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com",
    "saleAmount": "+$95.50"
  },
  {
    "name": "Diana Prince",
    "email": "diana.prince@example.com",
    "saleAmount": "+$120.00"
  },
  {
    "name": "Ethan Hunt",
    "email": "ethan.hunt@example.com",
    "saleAmount": "+$175.40"
  }
]
export default function Home() {
  return (

       <div className="flex flex-col gap-5 w-full">
          <PageTitle title="Dashboard" />
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all
          sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map((data, index) =>(
              <Card
              key={index}
              amount={data.amount}
              description={data.description}
              icon={data.icon}
              label={data.label}
              />
            ))}
          </section>
          <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            <CardContent>
              <p className="p-4 font-semibold">Overview</p>
              <BarChart/>
            </CardContent>
            <CardContent className="flex justify-between gap-4">
              <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">You made 265 sales this month.</p>
              </section>
              {userSaleData.map((d,i) => (
                <SalesCard key={i}
                email= {d.email}
                name={d.name}
                saleAmount={d.saleAmount}/>
              ))}
             
            </CardContent>
            
          </section>
      </div>
  
  );
}
