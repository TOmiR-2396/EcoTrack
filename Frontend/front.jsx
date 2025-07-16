import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const dummyLogs = [
  { date: "2025-07-10", co2Saved: 2.4 },
  { date: "2025-07-11", co2Saved: 1.8 },
  { date: "2025-07-12", co2Saved: 3.2 },
  { date: "2025-07-13", co2Saved: 2.1 },
];

export default function EcoTrack() {
  const [action, setAction] = useState("");
  const [logs, setLogs] = useState(dummyLogs);

  const handleLogAction = () => {
    if (!action.trim()) return;
    const newLog = {
      date: new Date().toISOString().slice(0, 10),
      co2Saved: Math.random() * 2 + 1, // Simulate CO2 saved
    };
    setLogs([...logs, newLog]);
    setAction("");
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6 gap-6">
      <h1 className="text-4xl font-bold text-green-700">🌿 EcoTrack</h1>
      <p className="text-lg text-green-800">Track and reward your sustainable actions</p>

      <Card className="w-full max-w-md">
        <CardContent className="p-4 space-y-4">
          <Input
            placeholder="Describe your eco-friendly action (e.g., Biked to work)"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
          <Button onClick={handleLogAction} className="w-full bg-green-600 hover:bg-green-700">
            Log Action
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-green-800">Your Impact This Week (CO₂ Saved in kg)</h2>
          <LineChart width={500} height={250} data={logs}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="co2Saved" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </CardContent>
      </Card>
    </div>
  );
}
