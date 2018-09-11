varying vec4 v;
uniform vec3 coefsX;
uniform vec3 coefsY;
uniform vec2 coefsD;
uniform vec2 dimen;
uniform sampler2DRect texture;

void main (void)
{
	vec4 color = gl_Color;
	
// conversion coordonnées gem en tuio
	float x = (1.0+v.x/abs(v.z))/2.0;
	float y = 1.0-(1.0+v.y/abs(v.z))/2.0;
	
	
//  application matrice de transformation


	float X;
	float Y;
	float D;
	D=1.0/(x*coefsD.x+y*coefsD.y+1.0);
	X=(x*coefsX.x+y*coefsX.y+coefsX.z)*D*dimen.x;
	Y=dimen.y-(x*coefsY.x+y*coefsY.y+coefsY.z)*D*dimen.y;
	vec2 lookupcoords = vec2(X,Y);
	vec4 v0 = texture2DRect(texture, lookupcoords);
	gl_FragColor =  v0;

}


