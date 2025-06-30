import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";

const initialInventory = JSON.parse(localStorage.getItem("inventory")) || [
  { name: "Tomatoes", quantity: 50, usageHistory: [10, 12, 8, 9, 11, 10, 10], category: "Vegetables" },
  { name: "Cheese", quantity: 30, usageHistory: [5, 6, 4, 5, 5, 6, 5], category: "Dairy" },
];

export default function InventoryTracker() {
  const [inventory, setInventory] = useState(initialInventory);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [lowStockAlerts, setLowStockAlerts] = useState([]);
  const [language, setLanguage] = useState("en");

  const LOW_STOCK_THRESHOLD = 10;

  useEffect(() => {
    const alerts = inventory
      .filter(item => item.quantity < LOW_STOCK_THRESHOLD)
      .map(item =>
        language === "es"
          ? `¡${item.name} tiene poco stock!`
          : `${item.name} is low on stock!`
      );
    setLowStockAlerts(alerts);
  }, [inventory, language]);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = () => {
    if (newItem && newQuantity && newCategory) {
      if (editingIndex !== null) {
        const updated = [...inventory];
        updated[editingIndex] = {
          ...updated[editingIndex],
          name: newItem,
          quantity: parseInt(newQuantity),
          category: newCategory,
        };
        setInventory(updated);
        setEditingIndex(null);
      } else {
        setInventory([
          ...inventory,
          {
            name: newItem,
            quantity: parseInt(newQuantity),
            usageHistory: [],
            category: newCategory,
          },
        ]);
      }
      setNewItem("");
      setNewQuantity("");
      setNewCategory("");
    }
  };

  const removeItem = (indexToRemove) => {
    const updatedInventory = inventory.filter((_, index) => index !== indexToRemove);
    setInventory(updatedInventory);
  };

  const editItem = (index) => {
    setNewItem(inventory[index].name);
    setNewQuantity(inventory[index].quantity);
    setNewCategory(inventory[index].category || "");
    setEditingIndex(index);
  };

  const calculateWeeklyAverage = (usageHistory) => {
    if (!usageHistory.length) return 0;
    const total = usageHistory.reduce((a, b) => a + b, 0);
    return (total / usageHistory.length).toFixed(1);
  };

  const recommendedOrder = (item) => {
    const avg = parseFloat(calculateWeeklyAverage(item.usageHistory));
    return Math.max(0, avg * 7 - item.quantity).toFixed(1);
  };

  const getRowClass = (quantity) => {
    if (quantity < 10) return "bg-red-100 text-red-800";
    if (quantity < 30) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const t = (en, es) => (language === "es" ? es : en);

  const groupedInventory = inventory.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-700">
          {t("Restaurant Inventory Tracker", "Control de Inventario del Restaurante")}
        </h1>
        <Button onClick={() => setLanguage(language === "en" ? "es" : "en")}>🌐 {language === "en" ? "ES" : "EN"}</Button>
      </div>

      {lowStockAlerts.length > 0 && (
        <Card className="mb-4 bg-red-100 border-red-400">
          <CardContent>
            <ul className="list-disc pl-5 text-red-700">
              {lowStockAlerts.map((alert, index) => (
                <li key={index}>{alert}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card className="mb-4 shadow-lg">
        <CardContent className="flex gap-2 items-center flex-wrap">
          <Input
            placeholder={t("Item name", "Nombre del ingrediente")}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Input
            type="number"
            placeholder={t("Quantity", "Cantidad")}
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />
          <Input
            placeholder={t("Category", "Categoría")}
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={addItem}>
            {editingIndex !== null ? t("Update", "Actualizar") : t("Add Item", "Agregar Ingrediente")}
          </Button>
        </CardContent>
      </Card>

      {Object.entries(groupedInventory).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{category}</h2>
          <Table className="shadow-md">
            <TableHeader>
              <TableRow className="bg-blue-100 text-blue-900 font-semibold">
                <TableCell>{t("Item", "Ingrediente")}</TableCell>
                <TableCell>{t("In Stock", "En stock")}</TableCell>
                <TableCell>{t("Weekly Avg", "Promedio Semanal")}</TableCell>
                <TableCell>{t("Recommended Order", "Pedido Recomendado")}</TableCell>
                <TableCell>{t("Action", "Acción")}</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index} className={getRowClass(item.quantity)}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{calculateWeeklyAverage(item.usageHistory)}</TableCell>
                  <TableCell>{recommendedOrder(item)}</TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => editItem(inventory.indexOf(item))}>
                      {t("Edit", "Modificar")}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => removeItem(inventory.indexOf(item))}>
                      {t("Remove", "Eliminar")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
