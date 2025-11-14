import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SubscriptionContactDialog = ({ open, onOpenChange }: SubscriptionContactDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    people: '',
    deliveryDays: '',
    address: '',
    duration: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Subscription request:', formData);
    
    toast({
      title: "Request submitted!",
      description: "We'll contact you shortly to finalize your subscription.",
    });
    
    onOpenChange(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      plan: '',
      people: '',
      deliveryDays: '',
      address: '',
      duration: '',
      notes: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Subscribe to Lunch Box Plan</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll contact you to finalize your subscription.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+971 XX XXX XXXX"
            />
          </div>

          <div>
            <Label htmlFor="plan">Preferred Plan *</Label>
            <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="luxury">Chef's Luxury Meal Set (130 AED)</SelectItem>
                <SelectItem value="premium">High Standard Meal Set (80 AED)</SelectItem>
                <SelectItem value="trial">Trial Meal Set (65 AED)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="people">Number of People *</Label>
              <Input
                id="people"
                type="number"
                min="1"
                required
                value={formData.people}
                onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                placeholder="1"
              />
            </div>

            <div>
              <Label htmlFor="deliveryDays">Delivery Days per Week *</Label>
              <Select value={formData.deliveryDays} onValueChange={(value) => setFormData({ ...formData, deliveryDays: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4 days/week (19 meals/month)</SelectItem>
                  <SelectItem value="5">5 days/week (22 meals/month)</SelectItem>
                  <SelectItem value="6">6 days/week (26 meals/month)</SelectItem>
                  <SelectItem value="custom">Custom schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="address">Delivery Address *</Label>
            <Textarea
              id="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Enter your complete delivery address"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="duration">Contract Duration (months) *</Label>
            <Input
              id="duration"
              type="number"
              min="1"
              required
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              placeholder="3"
            />
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any dietary restrictions, allergies, or special requests?"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gradient-primary text-primary-foreground">
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};