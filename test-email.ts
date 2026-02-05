import { verifyEmailConnection } from './lib/email';

/**
 * Test script to verify SMTP configuration
 * 
 * Run this with: npx tsx test-email.ts
 * 
 * Make sure you have real SMTP credentials in .env.local first!
 */

async function testEmailSetup() {
    console.log('🧪 Testing SMTP Email Configuration...\n');

    // Check environment variables
    console.log('📋 Checking environment variables:');
    const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM', 'SMTP_TO'];

    let allVarsPresent = true;
    for (const varName of requiredVars) {
        const value = process.env[varName];
        if (!value || value === 'your_password_here') {
            console.log(`   ❌ ${varName}: NOT SET or using placeholder`);
            allVarsPresent = false;
        } else {
            // Mask password for security
            const displayValue = varName.includes('PASSWORD') ? '***' : value;
            console.log(`   ✅ ${varName}: ${displayValue}`);
        }
    }

    if (!allVarsPresent) {
        console.log('\n⚠️  Please update .env.local with real SMTP credentials before testing.\n');
        return;
    }

    console.log('\n🔌 Testing SMTP connection...');
    const isConnected = await verifyEmailConnection();

    if (isConnected) {
        console.log('\n✅ SUCCESS! Your SMTP configuration is working correctly.');
        console.log('📧 You can now send emails from your contact form!\n');
    } else {
        console.log('\n❌ FAILED! Please check your SMTP credentials and try again.');
        console.log('💡 Common issues:');
        console.log('   - Wrong hostname, port, username, or password');
        console.log('   - Firewall blocking the connection');
        console.log('   - SMTP not enabled by hosting provider');
        console.log('   - Need to use "app password" instead of regular password\n');
    }
}

// Run the test
testEmailSetup().catch(console.error);
