import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight, TrendingUp, CreditCard } from "lucide-react";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen bg-background p-8 lg:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight">Design System</h1>
                    <p className="text-muted-foreground text-sm">
                        Saldo Certo — Fintech moderna, minimalista e premium
                    </p>
                </div>

                {/* Colors Palette */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Paleta de Cores</h2>
                        <p className="text-sm text-muted-foreground">Tons pastel suaves e minimalistas</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-yellow shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Yellow</p>
                                <p className="text-[10px] text-muted-foreground">#fef3c7</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-green shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Green</p>
                                <p className="text-[10px] text-muted-foreground">#d1fae5</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-blue shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Blue</p>
                                <p className="text-[10px] text-muted-foreground">#dbeafe</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-purple shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Purple</p>
                                <p className="text-[10px] text-muted-foreground">#e9d5ff</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-pink shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Pink</p>
                                <p className="text-[10px] text-muted-foreground">#fce7f3</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-24 rounded-2xl bg-pastel-orange shadow-sm border border-border" />
                            <div className="space-y-1">
                                <p className="text-xs font-medium">Orange</p>
                                <p className="text-[10px] text-muted-foreground">#fed7aa</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Tipografia</h2>
                        <p className="text-sm text-muted-foreground">Hierarquia clara: números grandes, labels discretas</p>
                    </div>

                    <Card>
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <p className="text-xs text-muted-foreground">Display / Números</p>
                                <p className="text-5xl font-bold">$9,385.34</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-muted-foreground">Heading</p>
                                <p className="text-2xl font-semibold">Total Balance</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-muted-foreground">Body</p>
                                <p className="text-sm">This is a regular body text with normal weight.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs text-muted-foreground">Caption / Labels</p>
                                <p className="text-xs text-muted-foreground">Small descriptive text for labels and captions</p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Buttons */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
                        <p className="text-sm text-muted-foreground">Arredondados e minimalistas</p>
                    </div>

                    <Card>
                        <CardContent className="p-8">
                            <div className="flex flex-wrap gap-3">
                                <Button>Default</Button>
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button disabled>Disabled</Button>
                                <Button size="sm">Small</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon"><ArrowUpRight className="h-4 w-4" /></Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Badges */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Badges</h2>
                        <p className="text-sm text-muted-foreground">Circulares e com cores pastel</p>
                    </div>

                    <Card>
                        <CardContent className="p-8 space-y-6">
                            <div>
                                <p className="text-xs text-muted-foreground mb-3">Pastel Badges (Categorias)</p>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="yellow">Yellow</Badge>
                                    <Badge variant="green">Green</Badge>
                                    <Badge variant="blue">Blue</Badge>
                                    <Badge variant="purple">Purple</Badge>
                                    <Badge variant="pink">Pink</Badge>
                                    <Badge variant="orange">Orange</Badge>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground mb-3">Icon Badges (Avatares)</p>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="yellow" size="icon">H</Badge>
                                    <Badge variant="blue" size="icon">S</Badge>
                                    <Badge variant="green" size="icon">N</Badge>
                                    <Badge variant="pink" size="icon">P</Badge>
                                    <Badge variant="purple" size="icon">D</Badge>
                                    <Badge variant="orange" size="icon">A</Badge>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground mb-3">Status Badges</p>
                                <div className="flex flex-wrap gap-3">
                                    <Badge variant="success">Success</Badge>
                                    <Badge variant="warning">Warning</Badge>
                                    <Badge variant="destructive">Error</Badge>
                                    <Badge variant="info">Info</Badge>
                                    <Badge variant="outline">Outline</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Cards */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Cards</h2>
                        <p className="text-sm text-muted-foreground">Brancos com bordas suaves e sombras leves</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card simples */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Balance</CardTitle>
                                <CardDescription>Current month</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">$9,385.34</p>
                                <p className="text-xs text-muted-foreground mt-2">+12.5% from last month</p>
                            </CardContent>
                        </Card>

                        {/* Card com ícone */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle>Revenue</CardTitle>
                                <div className="h-10 w-10 rounded-xl bg-success/20 flex items-center justify-center">
                                    <TrendingUp className="h-5 w-5 text-success-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">$34,742</p>
                                <p className="text-xs text-success-foreground mt-2">+34% this month</p>
                            </CardContent>
                        </Card>

                        {/* Card com badge */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Investments</CardTitle>
                                    <Badge variant="yellow" size="icon">H</Badge>
                                </div>
                                <CardDescription>Honda</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">+7.34%</p>
                                <p className="text-xs text-muted-foreground">2,342 Per month</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Inputs */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Inputs</h2>
                        <p className="text-sm text-muted-foreground">Arredondados e com bordas suaves</p>
                    </div>

                    <Card>
                        <CardContent className="p-8">
                            <div className="grid max-w-md gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs text-muted-foreground">Email</Label>
                                    <Input type="email" id="email" placeholder="seu@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="amount" className="text-xs text-muted-foreground">Amount</Label>
                                    <Input type="number" id="amount" placeholder="$0.00" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="disabled" className="text-xs text-muted-foreground">Disabled</Label>
                                    <Input disabled type="text" id="disabled" placeholder="Disabled input" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Skeleton */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Skeleton Loaders</h2>
                        <p className="text-sm text-muted-foreground">Estados de carregamento</p>
                    </div>

                    <Card>
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2 flex-1">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-3 w-[200px]" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Skeleton className="h-32 w-full" />
                                <div className="grid grid-cols-3 gap-3">
                                    <Skeleton className="h-24" />
                                    <Skeleton className="h-24" />
                                    <Skeleton className="h-24" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Example: Mini Dashboard Preview */}
                <section className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Exemplo Completo</h2>
                        <p className="text-sm text-muted-foreground">Preview do estilo aplicado</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-pastel-yellow/30 border-pastel-yellow">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardDescription>Card Number</CardDescription>
                                        <CardTitle className="text-base mt-1">1234 5678 8910 XXXX</CardTitle>
                                    </div>
                                    <CreditCard className="h-6 w-6 text-yellow-900/50" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-1">
                                    <p className="text-xs text-muted-foreground">Card Holder</p>
                                    <p className="text-sm font-medium">Zuboodah Valcova</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Spending in November</CardTitle>
                                <CardDescription>Monthly overview</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-4xl font-bold">$274.00</p>
                                    <p className="text-xs text-muted-foreground">This is $43.00 less than last month</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="font-medium">68%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                                        <div className="h-full w-[68%] bg-foreground rounded-full" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}
