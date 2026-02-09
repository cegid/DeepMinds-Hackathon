# DeepMinds-Hackathon

🚀 Plan de réalisation step-by-step
1. 🎯 Objectif & cadrage
Clarifier le périmètre : l’agent doit couvrir toute la chaîne (PBI → code → PR → doc).
Aligner avec le jury : mettre en avant l’intégration complète avec GitHub, car c’est leur centre d’intérêt.
Définir la démonstration finale : montrer un PBI incomplet → agent complète → code généré → PR créée → doc attachée → dashboard auto-généré.
2. 🛠️ Approche technique
Étape 1 : Analyse des PBI
Créer un agent PBI qui :
Lit les PBI depuis Azure DevOps.
Détecte les PBI incomplets (description vague, critères manquants).
Propose une version enrichie (acceptance criteria, tâches détaillées).
Outils : Azure DevOps API + N8N pour orchestrer.
Étape 2 : Génération de code
Créer un agent code qui :
Prend les PBI enrichis.
Génère du code via GitHub Copilot ou API.
Crée automatiquement une branch et une PR.
Outils : GitHub API + Copilot.
Étape 3 : Documentation
Agent principal :
Génère la documentation (README, notes techniques).
Attache la doc soit au PBI, soit à la PR selon la definition of done.
Outils : GitHub API (PR comments, wiki).
3. ✅ Stratégie de validation
Human-in-the-loop :
Après la PR, un humain doit valider avant que l’agent continue.
Workflow : PR créée → notification envoyée → review humaine → si validée, l’agent ajoute la documentation.
Sécurité :
Tokens avec scope utilisateur.
Logs pour tracer les actions de l’agent.
4. 🖥️ Interface & démonstration
Pas d’UI complexe → notifications uniquement.
Dashboard de monitoring :
Taux de succès des PBI complétés.
Nombre de PR générées.
Temps moyen de validation humaine.
Innovation : le dashboard est généré par l’agent lui-même (preuve d’autonomie).
5. 🔧 Outils & accès
Azure DevOps : source des PBI.
GitHub : code, PR, documentation.
N8N : orchestrateur des workflows (évite de coder les intégrations).
Tokens : même scope que l’utilisateur.
Portail interne : tickets pour demander accès.
6. 👥 Organisation de l’équipe
Poste central :  
Poste central : Nihad, Zakaria (Management). Nouria, Mahdia, Adnan, Zakaria(Developpement). 
Support technique : Amine (interconnexion Azure DevOps ↔ GitHub, tokens).
Communication : Amine disponible sur place pour débloquer rapidement les accès.
7. 📡 Déroulé de la démonstration
Créer un PBI incomplet dans Azure DevOps.
L’agent PBI complète automatiquement le ticket.
L’agent code génère une PR sur GitHub.
Notification envoyée → review humaine.
Après validation, l’agent ajoute la documentation.
Le dashboard (créé par l’agent) montre le succès de bout en bout.
8. 🌟 Points différenciants pour impressionner le jury
Chaîne complète automatisée (PBI → code → PR → doc).
Human-in-the-loop pour rassurer sur la qualité.
Dashboard auto-généré par l’agent.
Utilisation intelligente de GitHub et Azure DevOps (aligné avec leurs intérêts).
