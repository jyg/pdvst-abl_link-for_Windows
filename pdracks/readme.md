# PdRacks

Environnement de traitement sonore temps réel dans pure data.

S'inspirant de projets comme DIY2 (Matt Davey, aka  hard.off) et ArgoPd (Gérard Paresys), PdRacks propose des modules de traitement/synthèse sonore avec interface graphique utilisateur intégrée, donc avec un niveau d'abstraction et d'accessibilité plus élevé par rapport aux objets de base de puredata. 

# Présentation

PdRacks se présente sous la forme d'un rack d'effets et d'instruments pouvant être reconfigurés à la volée, en situation de performance. Dans ce mode, il n'est pas nécessaire de câbler à la souris des fils entre chaque module, comme c'est habituellement le cas avec les environnements modulaires (max msp, puredata, reaktor, audiomulch, etc...). Le projet est pensé dans la perspective d'une utilisation avec écran tactile.

PdRacks permet la sauvegarde des réglages sous forme de scènes, ainsi que le rappel de préréglages (presets) pour chaque type de module.
PdRacks intègre une fonction "midilearn" pour l'interfaçage rapide avec un contrôleur midi. Le mapping midi de chaque contrôleur est modifiable, et est sauvegardé avec chaque scène.

PdRacks et ses modules sont construits sur la bibliothèque d'abstractions rjdj, quasi-exclusivement en PureData vanilia, ce qui permet d'envisager une utilisation sur appareils mobiles (android, iOs) via l'application MobMuPlat.
Ce choix permet aussi de simplifier l'écriture de nouveaux modules par les utilisateurs, d'autant plus que le projet a vocation à être un outil pédagogique : découverte et application de la lib rjdj, étude des questions d'interfaçage et de mapping, confrontation aux problématiques de la lutherie électronique.

PdRacks est une proposition pour utiliser puredata en live d'une manière légère et réactive. 
